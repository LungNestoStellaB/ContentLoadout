import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(request: Request) {
  try {
    const { need, email } = await request.json();

    if (!need || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Store in Supabase
    // Table assumed to be 'questions' based on previous script findings
    const { error } = await supabase
      .from('questions')
      .insert([
        { 
          question: need, 
          email: email,
          category: 'general',
          status: 'received',
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error('Supabase error:', error);
      // We will still proceed with the recommendation even if DB save fails for demo
    }

    // 2. Simple routing logic based on keywords
    const lowerNeed = need.toLowerCase();
    let recommendation = "I will personally review your request and get back to you with the best tool.";
    
    if (lowerNeed.includes('admin') || lowerNeed.includes('chore') || lowerNeed.includes('overwhelm') || lowerNeed.includes('list')) {
      recommendation = "Goblin.tools: Perfect for breaking down overwhelming chores into tiny, manageable steps.";
    } else if (lowerNeed.includes('lonely') || lowerNeed.includes('talk') || lowerNeed.includes('anxious') || lowerNeed.includes('chat')) {
      recommendation = "Pi (by Inflection): A compassionate, conversational AI designed to be a supportive listener.";
    } else if (lowerNeed.includes('research') || lowerNeed.includes('fact') || lowerNeed.includes('travel') || lowerNeed.includes('news')) {
      recommendation = "Perplexity AI: A smart search engine that gives you answers, not just links.";
    } else if (lowerNeed.includes('write') || lowerNeed.includes('letter') || lowerNeed.includes('sensitive') || lowerNeed.includes('summarize')) {
      recommendation = "Claude: The best writer in the AI world, generating text that sounds genuinely human.";
    } else if (lowerNeed.includes('image') || lowerNeed.includes('flyer') || lowerNeed.includes('card') || lowerNeed.includes('design')) {
      recommendation = "Canva Magic Studio: Turns your text ideas into professional-looking images easily.";
    } else if (lowerNeed.includes('voice') || lowerNeed.includes('general') || lowerNeed.includes('phone')) {
      recommendation = "ChatGPT: The most famous assistant, great for voice conversations on your phone.";
    } else if (lowerNeed.includes('inbox') || lowerNeed.includes('gmail') || lowerNeed.includes('google') || lowerNeed.includes('drive')) {
      recommendation = "Google Gemini: Connects directly to the Google tools you already use.";
    }

    console.log(`[STUB] Would send email to just@askstella.online via SMTP: New request from ${email}: ${need}`);

    return NextResponse.json({ success: true, recommendation });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}