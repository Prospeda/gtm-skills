import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';
import { sendWelcomeEmail } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    // If Supabase not configured, just return success (dev mode)
    if (!supabase) {
      console.log('Supabase not configured, skipping DB insert for:', email);
      return NextResponse.json(
        { message: 'Subscribed successfully (dev mode)' },
        { status: 200 }
      );
    }

    // Check if already subscribed
    const { data: existing } = await supabase
      .from('subscribers')
      .select('id')
      .eq('email', email.toLowerCase())
      .single();

    if (existing) {
      return NextResponse.json(
        { message: 'Already subscribed', alreadySubscribed: true },
        { status: 200 }
      );
    }

    // Add subscriber
    const { error: insertError } = await supabase.from('subscribers').insert({
      email: email.toLowerCase(),
      source: source || 'website',
      subscribed_at: new Date().toISOString(),
    });

    if (insertError) {
      console.error('Supabase insert error:', insertError);
      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: 500 }
      );
    }

    // Send welcome email
    try {
      await sendWelcomeEmail(email);
    } catch (emailError) {
      console.error('Welcome email failed:', emailError);
      // Don't fail the subscription if email fails
    }

    return NextResponse.json(
      { message: 'Subscribed successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
