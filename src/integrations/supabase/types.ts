export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      "ai-sdr": {
        Row: {
          company_description: string | null
          company_website: string | null
          company_website_html_content: string | null
          created_at: string
          customer_sentiment: string | null
          employee_count: number | null
          ig_post_1: Json | null
          ig_post_2: Json | null
          ig_post_3: Json | null
          ig_post_4: Json | null
          ig_post_5: Json | null
          industries: string | null
          instagram_url: string | null
          last_contact_date: string | null
          lead_company: string | null
          lead_email: string | null
          lead_job_title: string | null
          lead_name: string | null
          lead_source: string | null
          linkedin_company_name: string | null
          linkedin_follower_count: number | null
          linkedin_url: string | null
          mail_id: string
          one_email_body: string | null
          one_email_subject: string | null
          pain_points_mentioned: string | null
          status: string | null
          thread_id: string | null
          tweet_1: Json | null
          tweet_2: Json | null
          tweet_3: Json | null
          tweet_4: Json | null
          tweet_5: Json | null
          twitter_url: string | null
        }
        Insert: {
          company_description?: string | null
          company_website?: string | null
          company_website_html_content?: string | null
          created_at?: string
          customer_sentiment?: string | null
          employee_count?: number | null
          ig_post_1?: Json | null
          ig_post_2?: Json | null
          ig_post_3?: Json | null
          ig_post_4?: Json | null
          ig_post_5?: Json | null
          industries?: string | null
          instagram_url?: string | null
          last_contact_date?: string | null
          lead_company?: string | null
          lead_email?: string | null
          lead_job_title?: string | null
          lead_name?: string | null
          lead_source?: string | null
          linkedin_company_name?: string | null
          linkedin_follower_count?: number | null
          linkedin_url?: string | null
          mail_id: string
          one_email_body?: string | null
          one_email_subject?: string | null
          pain_points_mentioned?: string | null
          status?: string | null
          thread_id?: string | null
          tweet_1?: Json | null
          tweet_2?: Json | null
          tweet_3?: Json | null
          tweet_4?: Json | null
          tweet_5?: Json | null
          twitter_url?: string | null
        }
        Update: {
          company_description?: string | null
          company_website?: string | null
          company_website_html_content?: string | null
          created_at?: string
          customer_sentiment?: string | null
          employee_count?: number | null
          ig_post_1?: Json | null
          ig_post_2?: Json | null
          ig_post_3?: Json | null
          ig_post_4?: Json | null
          ig_post_5?: Json | null
          industries?: string | null
          instagram_url?: string | null
          last_contact_date?: string | null
          lead_company?: string | null
          lead_email?: string | null
          lead_job_title?: string | null
          lead_name?: string | null
          lead_source?: string | null
          linkedin_company_name?: string | null
          linkedin_follower_count?: number | null
          linkedin_url?: string | null
          mail_id?: string
          one_email_body?: string | null
          one_email_subject?: string | null
          pain_points_mentioned?: string | null
          status?: string | null
          thread_id?: string | null
          tweet_1?: Json | null
          tweet_2?: Json | null
          tweet_3?: Json | null
          tweet_4?: Json | null
          tweet_5?: Json | null
          twitter_url?: string | null
        }
        Relationships: []
      }
      contacts: {
        Row: {
          action_plan_doc_id: string | null
          call_type: string | null
          client_folder_id: string | null
          contact_id: string
          created_at: string | null
          email: string | null
          name: string
          notes: string | null
          phone_number: string | null
          progress_report_doc_id: string | null
          proposal_doc_id: string | null
          updated_at: string | null
        }
        Insert: {
          action_plan_doc_id?: string | null
          call_type?: string | null
          client_folder_id?: string | null
          contact_id: string
          created_at?: string | null
          email?: string | null
          name: string
          notes?: string | null
          phone_number?: string | null
          progress_report_doc_id?: string | null
          proposal_doc_id?: string | null
          updated_at?: string | null
        }
        Update: {
          action_plan_doc_id?: string | null
          call_type?: string | null
          client_folder_id?: string | null
          contact_id?: string
          created_at?: string | null
          email?: string | null
          name?: string
          notes?: string | null
          phone_number?: string | null
          progress_report_doc_id?: string | null
          proposal_doc_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      content_posts: {
        Row: {
          content: string
          content_type: string
          created_at: string
          edit_history: Json
          id: string
          original_content: string | null
          platform: string | null
          scheduled_date: string | null
          source_data: Json
          status: string
          tags: string[] | null
          title: string | null
          updated_at: string
        }
        Insert: {
          content: string
          content_type: string
          created_at?: string
          edit_history?: Json
          id?: string
          original_content?: string | null
          platform?: string | null
          scheduled_date?: string | null
          source_data: Json
          status?: string
          tags?: string[] | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          content?: string
          content_type?: string
          created_at?: string
          edit_history?: Json
          id?: string
          original_content?: string | null
          platform?: string | null
          scheduled_date?: string | null
          source_data?: Json
          status?: string
          tags?: string[] | null
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      daily_activity_reports: {
        Row: {
          accomplished: string | null
          big_goal: string | null
          blockers: string | null
          created_at: string | null
          date: string
          id: string
          improvements: string | null
          learnings: string | null
          meetings: string | null
          next_day_goals: string | null
          rating: number | null
          schedule: Json | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          accomplished?: string | null
          big_goal?: string | null
          blockers?: string | null
          created_at?: string | null
          date: string
          id?: string
          improvements?: string | null
          learnings?: string | null
          meetings?: string | null
          next_day_goals?: string | null
          rating?: number | null
          schedule?: Json | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          accomplished?: string | null
          big_goal?: string | null
          blockers?: string | null
          created_at?: string | null
          date?: string
          id?: string
          improvements?: string | null
          learnings?: string | null
          meetings?: string | null
          next_day_goals?: string | null
          rating?: number | null
          schedule?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      daily_progress: {
        Row: {
          created_at: string | null
          data: Json
          date: string | null
          id: string
          platform: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          data: Json
          date?: string | null
          id?: string
          platform: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          data?: Json
          date?: string | null
          id?: string
          platform?: string
          user_id?: string
        }
        Relationships: []
      }
      dream_leads: {
        Row: {
          booked_meeting: boolean | null
          company_linkedin_data: Json | null
          company_website: string | null
          company_website_data: Json | null
          connection_accepted_status: boolean | null
          connection_request_message: string | null
          created_at: string | null
          dm_1: string | null
          dm_1sent: boolean | null
          dm_2: string | null
          dm_3: string | null
          dm1_timestamp: string | null
          industry: string | null
          job_title: string | null
          lead_company_linkedin_url: string | null
          lead_company_name: string | null
          lead_email: string | null
          lead_linkedin_url: string
          lead_name: string
          lead_phone_number: string | null
          lead_status: string | null
          potential_services: string | null
          process_id: string
          updated_at: string | null
        }
        Insert: {
          booked_meeting?: boolean | null
          company_linkedin_data?: Json | null
          company_website?: string | null
          company_website_data?: Json | null
          connection_accepted_status?: boolean | null
          connection_request_message?: string | null
          created_at?: string | null
          dm_1?: string | null
          dm_1sent?: boolean | null
          dm_2?: string | null
          dm_3?: string | null
          dm1_timestamp?: string | null
          industry?: string | null
          job_title?: string | null
          lead_company_linkedin_url?: string | null
          lead_company_name?: string | null
          lead_email?: string | null
          lead_linkedin_url: string
          lead_name: string
          lead_phone_number?: string | null
          lead_status?: string | null
          potential_services?: string | null
          process_id?: string
          updated_at?: string | null
        }
        Update: {
          booked_meeting?: boolean | null
          company_linkedin_data?: Json | null
          company_website?: string | null
          company_website_data?: Json | null
          connection_accepted_status?: boolean | null
          connection_request_message?: string | null
          created_at?: string | null
          dm_1?: string | null
          dm_1sent?: boolean | null
          dm_2?: string | null
          dm_3?: string | null
          dm1_timestamp?: string | null
          industry?: string | null
          job_title?: string | null
          lead_company_linkedin_url?: string | null
          lead_company_name?: string | null
          lead_email?: string | null
          lead_linkedin_url?: string
          lead_name?: string
          lead_phone_number?: string | null
          lead_status?: string | null
          potential_services?: string | null
          process_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      leads_pipeline: {
        Row: {
          analysis_doc_content: string | null
          analysis_doc_link: string | null
          booked: boolean | null
          booked_at: string | null
          campaign_id: string | null
          company_linkedin_data: Json | null
          company_name: string | null
          company_size: string | null
          company_website: string | null
          created_at: string | null
          day_1_body: string | null
          day_1_msg_id: string | null
          day_1_reply: boolean | null
          day_1_sent: boolean | null
          day_1_sent_at: string | null
          day_1_subject: string | null
          day_2_body: string | null
          day_2_msg_id: string | null
          day_2_reply: boolean | null
          day_2_sent: boolean | null
          day_2_sent_at: string | null
          day_2_subject: string | null
          day_3_body: string | null
          day_3_msg_id: string | null
          day_3_reply: boolean | null
          day_3_sent: boolean | null
          day_3_sent_at: string | null
          day_3_subject: string | null
          day_4_body: string | null
          day_4_msg_id: string | null
          day_4_reply: boolean | null
          day_4_sent: boolean | null
          day_4_sent_at: string | null
          day_4_subject: string | null
          days: number | null
          email: string
          fullname: string | null
          id: string
          industry: string | null
          job_title: string | null
          last_updated_at: string | null
          lead_source: string | null
          linkedin_url: string | null
          no_commercial_mail: boolean | null
          replied: boolean | null
          repliq_video_id: string | null
          scraping_allowed: boolean | null
          sent_status: string | null
          stage: string | null
          video_link: string | null
          video_thumbnail_url: string | null
          web_scraping_protected: boolean
        }
        Insert: {
          analysis_doc_content?: string | null
          analysis_doc_link?: string | null
          booked?: boolean | null
          booked_at?: string | null
          campaign_id?: string | null
          company_linkedin_data?: Json | null
          company_name?: string | null
          company_size?: string | null
          company_website?: string | null
          created_at?: string | null
          day_1_body?: string | null
          day_1_msg_id?: string | null
          day_1_reply?: boolean | null
          day_1_sent?: boolean | null
          day_1_sent_at?: string | null
          day_1_subject?: string | null
          day_2_body?: string | null
          day_2_msg_id?: string | null
          day_2_reply?: boolean | null
          day_2_sent?: boolean | null
          day_2_sent_at?: string | null
          day_2_subject?: string | null
          day_3_body?: string | null
          day_3_msg_id?: string | null
          day_3_reply?: boolean | null
          day_3_sent?: boolean | null
          day_3_sent_at?: string | null
          day_3_subject?: string | null
          day_4_body?: string | null
          day_4_msg_id?: string | null
          day_4_reply?: boolean | null
          day_4_sent?: boolean | null
          day_4_sent_at?: string | null
          day_4_subject?: string | null
          days?: number | null
          email: string
          fullname?: string | null
          id?: string
          industry?: string | null
          job_title?: string | null
          last_updated_at?: string | null
          lead_source?: string | null
          linkedin_url?: string | null
          no_commercial_mail?: boolean | null
          replied?: boolean | null
          repliq_video_id?: string | null
          scraping_allowed?: boolean | null
          sent_status?: string | null
          stage?: string | null
          video_link?: string | null
          video_thumbnail_url?: string | null
          web_scraping_protected?: boolean
        }
        Update: {
          analysis_doc_content?: string | null
          analysis_doc_link?: string | null
          booked?: boolean | null
          booked_at?: string | null
          campaign_id?: string | null
          company_linkedin_data?: Json | null
          company_name?: string | null
          company_size?: string | null
          company_website?: string | null
          created_at?: string | null
          day_1_body?: string | null
          day_1_msg_id?: string | null
          day_1_reply?: boolean | null
          day_1_sent?: boolean | null
          day_1_sent_at?: string | null
          day_1_subject?: string | null
          day_2_body?: string | null
          day_2_msg_id?: string | null
          day_2_reply?: boolean | null
          day_2_sent?: boolean | null
          day_2_sent_at?: string | null
          day_2_subject?: string | null
          day_3_body?: string | null
          day_3_msg_id?: string | null
          day_3_reply?: boolean | null
          day_3_sent?: boolean | null
          day_3_sent_at?: string | null
          day_3_subject?: string | null
          day_4_body?: string | null
          day_4_msg_id?: string | null
          day_4_reply?: boolean | null
          day_4_sent?: boolean | null
          day_4_sent_at?: string | null
          day_4_subject?: string | null
          days?: number | null
          email?: string
          fullname?: string | null
          id?: string
          industry?: string | null
          job_title?: string | null
          last_updated_at?: string | null
          lead_source?: string | null
          linkedin_url?: string | null
          no_commercial_mail?: boolean | null
          replied?: boolean | null
          repliq_video_id?: string | null
          scraping_allowed?: boolean | null
          sent_status?: string | null
          stage?: string | null
          video_link?: string | null
          video_thumbnail_url?: string | null
          web_scraping_protected?: boolean
        }
        Relationships: []
      }
      leads_pipeline_duplicate_leads: {
        Row: {
          analysis_doc_content: string | null
          analysis_doc_link: string | null
          booked: boolean | null
          booked_at: string | null
          campaign_id: string | null
          company_linkedin_data: Json | null
          company_name: string | null
          company_size: string | null
          company_website: string | null
          created_at: string | null
          day_1_body: string | null
          day_1_msg_id: string | null
          day_1_reply: boolean | null
          day_1_sent: boolean | null
          day_1_sent_at: string | null
          day_1_subject: string | null
          day_3_body: string | null
          day_3_msg_id: string | null
          day_3_reply: boolean | null
          day_3_sent: boolean | null
          day_3_sent_at: string | null
          day_3_subject: string | null
          day_5_body: string | null
          day_5_msg_id: string | null
          day_5_reply: boolean | null
          day_5_sent: boolean | null
          day_5_sent_at: string | null
          day_5_subject: string | null
          day_7_body: string | null
          day_7_msg_id: string | null
          day_7_reply: boolean | null
          day_7_sent: boolean | null
          day_7_sent_at: string | null
          day_7_subject: string | null
          days: number | null
          email: string
          fullname: string | null
          id: string
          industry: string | null
          job_title: string | null
          last_updated_at: string | null
          lead_source: string | null
          linkedin_url: string | null
          replied: boolean | null
          repliq_video_id: string | null
          sent_status: string | null
          stage: string | null
          video_link: string | null
          video_thumbnail_url: string | null
        }
        Insert: {
          analysis_doc_content?: string | null
          analysis_doc_link?: string | null
          booked?: boolean | null
          booked_at?: string | null
          campaign_id?: string | null
          company_linkedin_data?: Json | null
          company_name?: string | null
          company_size?: string | null
          company_website?: string | null
          created_at?: string | null
          day_1_body?: string | null
          day_1_msg_id?: string | null
          day_1_reply?: boolean | null
          day_1_sent?: boolean | null
          day_1_sent_at?: string | null
          day_1_subject?: string | null
          day_3_body?: string | null
          day_3_msg_id?: string | null
          day_3_reply?: boolean | null
          day_3_sent?: boolean | null
          day_3_sent_at?: string | null
          day_3_subject?: string | null
          day_5_body?: string | null
          day_5_msg_id?: string | null
          day_5_reply?: boolean | null
          day_5_sent?: boolean | null
          day_5_sent_at?: string | null
          day_5_subject?: string | null
          day_7_body?: string | null
          day_7_msg_id?: string | null
          day_7_reply?: boolean | null
          day_7_sent?: boolean | null
          day_7_sent_at?: string | null
          day_7_subject?: string | null
          days?: number | null
          email: string
          fullname?: string | null
          id?: string
          industry?: string | null
          job_title?: string | null
          last_updated_at?: string | null
          lead_source?: string | null
          linkedin_url?: string | null
          replied?: boolean | null
          repliq_video_id?: string | null
          sent_status?: string | null
          stage?: string | null
          video_link?: string | null
          video_thumbnail_url?: string | null
        }
        Update: {
          analysis_doc_content?: string | null
          analysis_doc_link?: string | null
          booked?: boolean | null
          booked_at?: string | null
          campaign_id?: string | null
          company_linkedin_data?: Json | null
          company_name?: string | null
          company_size?: string | null
          company_website?: string | null
          created_at?: string | null
          day_1_body?: string | null
          day_1_msg_id?: string | null
          day_1_reply?: boolean | null
          day_1_sent?: boolean | null
          day_1_sent_at?: string | null
          day_1_subject?: string | null
          day_3_body?: string | null
          day_3_msg_id?: string | null
          day_3_reply?: boolean | null
          day_3_sent?: boolean | null
          day_3_sent_at?: string | null
          day_3_subject?: string | null
          day_5_body?: string | null
          day_5_msg_id?: string | null
          day_5_reply?: boolean | null
          day_5_sent?: boolean | null
          day_5_sent_at?: string | null
          day_5_subject?: string | null
          day_7_body?: string | null
          day_7_msg_id?: string | null
          day_7_reply?: boolean | null
          day_7_sent?: boolean | null
          day_7_sent_at?: string | null
          day_7_subject?: string | null
          days?: number | null
          email?: string
          fullname?: string | null
          id?: string
          industry?: string | null
          job_title?: string | null
          last_updated_at?: string | null
          lead_source?: string | null
          linkedin_url?: string | null
          replied?: boolean | null
          repliq_video_id?: string | null
          sent_status?: string | null
          stage?: string | null
          video_link?: string | null
          video_thumbnail_url?: string | null
        }
        Relationships: []
      }
      leads_pipeline_duplicate_test: {
        Row: {
          analysis_doc_link: string | null
          booked: boolean | null
          booked_at: string | null
          booked_meeting: boolean | null
          campaign_id: string | null
          company_linkedin_data: Json | null
          company_name: string | null
          company_size: string | null
          company_website: string | null
          created_at: string | null
          day_1_body: string | null
          day_1_clicks: number | null
          day_1_msg_id: string | null
          day_1_opens: number | null
          day_1_reply: boolean | null
          day_1_reply_at: string | null
          day_1_sent: boolean | null
          day_1_sent_at: string | null
          day_1_subject: string | null
          day_3_body: string | null
          day_3_clicks: number | null
          day_3_msg_id: string | null
          day_3_opens: number | null
          day_3_reply: boolean | null
          day_3_reply_at: string | null
          day_3_sent: boolean | null
          day_3_sent_at: string | null
          day_3_subject: string | null
          day_5_body: string | null
          day_5_clicks: number | null
          day_5_msg_id: string | null
          day_5_opens: number | null
          day_5_reply: boolean | null
          day_5_reply_at: string | null
          day_5_sent: boolean | null
          day_5_sent_at: string | null
          day_5_subject: string | null
          day_7_body: string | null
          day_7_clicks: number | null
          day_7_msg_id: string | null
          day_7_opens: number | null
          day_7_reply: boolean | null
          day_7_reply_at: string | null
          day_7_sent: boolean | null
          day_7_sent_at: string | null
          day_7_subject: string | null
          days: number | null
          days_since_last_update: number | null
          days_updated_at: string | null
          email: string
          fullname: string | null
          id: string
          industry: string | null
          job_title: string | null
          last_email_sent_at: string | null
          last_updated_at: string | null
          lead_source: string | null
          linkedin_url: string | null
          pain_points: Json | null
          personalization_data: Json | null
          replied: boolean | null
          repliq_video_id: string | null
          sent_status: string | null
          stage: string | null
          thread_id: string | null
          total_emails_sent: number | null
          username: string | null
          video_link: string | null
          video_thumbnail_url: string | null
        }
        Insert: {
          analysis_doc_link?: string | null
          booked?: boolean | null
          booked_at?: string | null
          booked_meeting?: boolean | null
          campaign_id?: string | null
          company_linkedin_data?: Json | null
          company_name?: string | null
          company_size?: string | null
          company_website?: string | null
          created_at?: string | null
          day_1_body?: string | null
          day_1_clicks?: number | null
          day_1_msg_id?: string | null
          day_1_opens?: number | null
          day_1_reply?: boolean | null
          day_1_reply_at?: string | null
          day_1_sent?: boolean | null
          day_1_sent_at?: string | null
          day_1_subject?: string | null
          day_3_body?: string | null
          day_3_clicks?: number | null
          day_3_msg_id?: string | null
          day_3_opens?: number | null
          day_3_reply?: boolean | null
          day_3_reply_at?: string | null
          day_3_sent?: boolean | null
          day_3_sent_at?: string | null
          day_3_subject?: string | null
          day_5_body?: string | null
          day_5_clicks?: number | null
          day_5_msg_id?: string | null
          day_5_opens?: number | null
          day_5_reply?: boolean | null
          day_5_reply_at?: string | null
          day_5_sent?: boolean | null
          day_5_sent_at?: string | null
          day_5_subject?: string | null
          day_7_body?: string | null
          day_7_clicks?: number | null
          day_7_msg_id?: string | null
          day_7_opens?: number | null
          day_7_reply?: boolean | null
          day_7_reply_at?: string | null
          day_7_sent?: boolean | null
          day_7_sent_at?: string | null
          day_7_subject?: string | null
          days?: number | null
          days_since_last_update?: number | null
          days_updated_at?: string | null
          email: string
          fullname?: string | null
          id?: string
          industry?: string | null
          job_title?: string | null
          last_email_sent_at?: string | null
          last_updated_at?: string | null
          lead_source?: string | null
          linkedin_url?: string | null
          pain_points?: Json | null
          personalization_data?: Json | null
          replied?: boolean | null
          repliq_video_id?: string | null
          sent_status?: string | null
          stage?: string | null
          thread_id?: string | null
          total_emails_sent?: number | null
          username?: string | null
          video_link?: string | null
          video_thumbnail_url?: string | null
        }
        Update: {
          analysis_doc_link?: string | null
          booked?: boolean | null
          booked_at?: string | null
          booked_meeting?: boolean | null
          campaign_id?: string | null
          company_linkedin_data?: Json | null
          company_name?: string | null
          company_size?: string | null
          company_website?: string | null
          created_at?: string | null
          day_1_body?: string | null
          day_1_clicks?: number | null
          day_1_msg_id?: string | null
          day_1_opens?: number | null
          day_1_reply?: boolean | null
          day_1_reply_at?: string | null
          day_1_sent?: boolean | null
          day_1_sent_at?: string | null
          day_1_subject?: string | null
          day_3_body?: string | null
          day_3_clicks?: number | null
          day_3_msg_id?: string | null
          day_3_opens?: number | null
          day_3_reply?: boolean | null
          day_3_reply_at?: string | null
          day_3_sent?: boolean | null
          day_3_sent_at?: string | null
          day_3_subject?: string | null
          day_5_body?: string | null
          day_5_clicks?: number | null
          day_5_msg_id?: string | null
          day_5_opens?: number | null
          day_5_reply?: boolean | null
          day_5_reply_at?: string | null
          day_5_sent?: boolean | null
          day_5_sent_at?: string | null
          day_5_subject?: string | null
          day_7_body?: string | null
          day_7_clicks?: number | null
          day_7_msg_id?: string | null
          day_7_opens?: number | null
          day_7_reply?: boolean | null
          day_7_reply_at?: string | null
          day_7_sent?: boolean | null
          day_7_sent_at?: string | null
          day_7_subject?: string | null
          days?: number | null
          days_since_last_update?: number | null
          days_updated_at?: string | null
          email?: string
          fullname?: string | null
          id?: string
          industry?: string | null
          job_title?: string | null
          last_email_sent_at?: string | null
          last_updated_at?: string | null
          lead_source?: string | null
          linkedin_url?: string | null
          pain_points?: Json | null
          personalization_data?: Json | null
          replied?: boolean | null
          repliq_video_id?: string | null
          sent_status?: string | null
          stage?: string | null
          thread_id?: string | null
          total_emails_sent?: number | null
          username?: string | null
          video_link?: string | null
          video_thumbnail_url?: string | null
        }
        Relationships: []
      }
      leads_pipeline_v4: {
        Row: {
          analysis_doc_content: string | null
          analysis_doc_link: string | null
          booked: boolean | null
          booked_at: string | null
          campaign_id: string | null
          company_linkedin_data: Json | null
          company_name: string | null
          company_size: string | null
          company_website: string | null
          created_at: string | null
          day_1_body: string | null
          day_1_msg_id: string | null
          day_1_reply: boolean | null
          day_1_sent: boolean | null
          day_1_sent_at: string | null
          day_1_subject: string | null
          day_3_body: string | null
          day_3_msg_id: string | null
          day_3_reply: boolean | null
          day_3_sent: boolean | null
          day_3_sent_at: string | null
          day_3_subject: string | null
          day_5_body: string | null
          day_5_msg_id: string | null
          day_5_reply: boolean | null
          day_5_sent: boolean | null
          day_5_sent_at: string | null
          day_5_subject: string | null
          day_7_body: string | null
          day_7_msg_id: string | null
          day_7_reply: boolean | null
          day_7_sent: boolean | null
          day_7_sent_at: string | null
          day_7_subject: string | null
          days: number | null
          email: string
          fullname: string | null
          id: string
          industry: string | null
          job_title: string | null
          last_updated_at: string | null
          lead_source: string | null
          linkedin_url: string | null
          replied: boolean | null
          repliq_video_id: string | null
          sent_status: string | null
          stage: string | null
          video_link: string | null
          video_thumbnail_url: string | null
          web_scraping_protected: boolean
        }
        Insert: {
          analysis_doc_content?: string | null
          analysis_doc_link?: string | null
          booked?: boolean | null
          booked_at?: string | null
          campaign_id?: string | null
          company_linkedin_data?: Json | null
          company_name?: string | null
          company_size?: string | null
          company_website?: string | null
          created_at?: string | null
          day_1_body?: string | null
          day_1_msg_id?: string | null
          day_1_reply?: boolean | null
          day_1_sent?: boolean | null
          day_1_sent_at?: string | null
          day_1_subject?: string | null
          day_3_body?: string | null
          day_3_msg_id?: string | null
          day_3_reply?: boolean | null
          day_3_sent?: boolean | null
          day_3_sent_at?: string | null
          day_3_subject?: string | null
          day_5_body?: string | null
          day_5_msg_id?: string | null
          day_5_reply?: boolean | null
          day_5_sent?: boolean | null
          day_5_sent_at?: string | null
          day_5_subject?: string | null
          day_7_body?: string | null
          day_7_msg_id?: string | null
          day_7_reply?: boolean | null
          day_7_sent?: boolean | null
          day_7_sent_at?: string | null
          day_7_subject?: string | null
          days?: number | null
          email: string
          fullname?: string | null
          id?: string
          industry?: string | null
          job_title?: string | null
          last_updated_at?: string | null
          lead_source?: string | null
          linkedin_url?: string | null
          replied?: boolean | null
          repliq_video_id?: string | null
          sent_status?: string | null
          stage?: string | null
          video_link?: string | null
          video_thumbnail_url?: string | null
          web_scraping_protected?: boolean
        }
        Update: {
          analysis_doc_content?: string | null
          analysis_doc_link?: string | null
          booked?: boolean | null
          booked_at?: string | null
          campaign_id?: string | null
          company_linkedin_data?: Json | null
          company_name?: string | null
          company_size?: string | null
          company_website?: string | null
          created_at?: string | null
          day_1_body?: string | null
          day_1_msg_id?: string | null
          day_1_reply?: boolean | null
          day_1_sent?: boolean | null
          day_1_sent_at?: string | null
          day_1_subject?: string | null
          day_3_body?: string | null
          day_3_msg_id?: string | null
          day_3_reply?: boolean | null
          day_3_sent?: boolean | null
          day_3_sent_at?: string | null
          day_3_subject?: string | null
          day_5_body?: string | null
          day_5_msg_id?: string | null
          day_5_reply?: boolean | null
          day_5_sent?: boolean | null
          day_5_sent_at?: string | null
          day_5_subject?: string | null
          day_7_body?: string | null
          day_7_msg_id?: string | null
          day_7_reply?: boolean | null
          day_7_sent?: boolean | null
          day_7_sent_at?: string | null
          day_7_subject?: string | null
          days?: number | null
          email?: string
          fullname?: string | null
          id?: string
          industry?: string | null
          job_title?: string | null
          last_updated_at?: string | null
          lead_source?: string | null
          linkedin_url?: string | null
          replied?: boolean | null
          repliq_video_id?: string | null
          sent_status?: string | null
          stage?: string | null
          video_link?: string | null
          video_thumbnail_url?: string | null
          web_scraping_protected?: boolean
        }
        Relationships: []
      }
      meetings: {
        Row: {
          action_items: Json | null
          attendee_emails: Json | null
          attendees: Json | null
          classification: string | null
          client_company_name: string | null
          client_email: string | null
          client_fname: string | null
          client_lname: string | null
          created_at: string | null
          duration: number | null
          fireflies_id: string
          host_email: string | null
          id: string
          meeting_date: string | null
          processed: boolean | null
          sentiment_negative: number | null
          sentiment_neutral: number | null
          sentiment_positive: number | null
          summary: string | null
          title: string
          transcript: string
          updated_at: string | null
        }
        Insert: {
          action_items?: Json | null
          attendee_emails?: Json | null
          attendees?: Json | null
          classification?: string | null
          client_company_name?: string | null
          client_email?: string | null
          client_fname?: string | null
          client_lname?: string | null
          created_at?: string | null
          duration?: number | null
          fireflies_id: string
          host_email?: string | null
          id?: string
          meeting_date?: string | null
          processed?: boolean | null
          sentiment_negative?: number | null
          sentiment_neutral?: number | null
          sentiment_positive?: number | null
          summary?: string | null
          title: string
          transcript: string
          updated_at?: string | null
        }
        Update: {
          action_items?: Json | null
          attendee_emails?: Json | null
          attendees?: Json | null
          classification?: string | null
          client_company_name?: string | null
          client_email?: string | null
          client_fname?: string | null
          client_lname?: string | null
          created_at?: string | null
          duration?: number | null
          fireflies_id?: string
          host_email?: string | null
          id?: string
          meeting_date?: string | null
          processed?: boolean | null
          sentiment_negative?: number | null
          sentiment_neutral?: number | null
          sentiment_positive?: number | null
          summary?: string | null
          title?: string
          transcript?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      tasks: {
        Row: {
          category: string
          created_at: string | null
          date: string
          description: string | null
          id: string
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          category: string
          created_at?: string | null
          date: string
          description?: string | null
          id?: string
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string | null
          date?: string
          description?: string | null
          id?: string
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      ugc_content: {
        Row: {
          created_at: string
          emotional_tone: string
          generated_video_url: string | null
          id: string
          influencer_description: string | null
          key_message_cta: string
          process_id: string
          product_image_url: string | null
          product_name: string
          status: string
          target_audience: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          emotional_tone: string
          generated_video_url?: string | null
          id?: string
          influencer_description?: string | null
          key_message_cta: string
          process_id?: string
          product_image_url?: string | null
          product_name: string
          status?: string
          target_audience: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          emotional_tone?: string
          generated_video_url?: string | null
          id?: string
          influencer_description?: string | null
          key_message_cta?: string
          process_id?: string
          product_image_url?: string | null
          product_name?: string
          status?: string
          target_audience?: string
          updated_at?: string
        }
        Relationships: []
      }
      upwork_job_records: {
        Row: {
          cover_letter: string | null
          created_at: string
          document_url: string | null
          id: string
          mermaid_code: string | null
          status: Database["public"]["Enums"]["upwork_job_status"]
          summary: string
          title: string
          updated_at: string
          user_id: string
          video_script: string | null
        }
        Insert: {
          cover_letter?: string | null
          created_at?: string
          document_url?: string | null
          id?: string
          mermaid_code?: string | null
          status?: Database["public"]["Enums"]["upwork_job_status"]
          summary: string
          title: string
          updated_at?: string
          user_id: string
          video_script?: string | null
        }
        Update: {
          cover_letter?: string | null
          created_at?: string
          document_url?: string | null
          id?: string
          mermaid_code?: string | null
          status?: Database["public"]["Enums"]["upwork_job_status"]
          summary?: string
          title?: string
          updated_at?: string
          user_id?: string
          video_script?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "upwork_job_records_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "upwork_users"
            referencedColumns: ["id"]
          },
        ]
      }
      upwork_user_settings: {
        Row: {
          created_at: string
          notifications: boolean
          theme: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          notifications?: boolean
          theme?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          notifications?: boolean
          theme?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      upwork_users: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      viral_ads_submissions: {
        Row: {
          ad_inspiration_url: string | null
          campaign_objective: string
          created_at: string | null
          emotional_tone: string[]
          generated_ad_url_facebook: string | null
          generated_ad_url_instagram: string | null
          generated_ad_url_linkedin: string | null
          generated_ad_url_x: string | null
          id: string
          key_message_cta: string
          process_id: string
          product_image_url: string | null
          product_service_name: string
          social_media: string[]
          status: string | null
          target_audience: string
          webhook_sent: boolean | null
        }
        Insert: {
          ad_inspiration_url?: string | null
          campaign_objective: string
          created_at?: string | null
          emotional_tone?: string[]
          generated_ad_url_facebook?: string | null
          generated_ad_url_instagram?: string | null
          generated_ad_url_linkedin?: string | null
          generated_ad_url_x?: string | null
          id?: string
          key_message_cta: string
          process_id?: string
          product_image_url?: string | null
          product_service_name: string
          social_media?: string[]
          status?: string | null
          target_audience: string
          webhook_sent?: boolean | null
        }
        Update: {
          ad_inspiration_url?: string | null
          campaign_objective?: string
          created_at?: string | null
          emotional_tone?: string[]
          generated_ad_url_facebook?: string | null
          generated_ad_url_instagram?: string | null
          generated_ad_url_linkedin?: string | null
          generated_ad_url_x?: string | null
          id?: string
          key_message_cta?: string
          process_id?: string
          product_image_url?: string | null
          product_service_name?: string
          social_media?: string[]
          status?: string | null
          target_audience?: string
          webhook_sent?: boolean | null
        }
        Relationships: []
      }
      "viral-content-identifier": {
        Row: {
          audience_sentiment_score: number | null
          behavioral_insights: string | null
          created_at: string | null
          engagement_quality_score: number | null
          feedback_themes: string | null
          frequently_asked_questions: string[] | null
          id: string
          perceived_tool_value: number | null
          platform: string | null
          search_query: string | null
          updated_at: string | null
          urls: Json | null
        }
        Insert: {
          audience_sentiment_score?: number | null
          behavioral_insights?: string | null
          created_at?: string | null
          engagement_quality_score?: number | null
          feedback_themes?: string | null
          frequently_asked_questions?: string[] | null
          id: string
          perceived_tool_value?: number | null
          platform?: string | null
          search_query?: string | null
          updated_at?: string | null
          urls?: Json | null
        }
        Update: {
          audience_sentiment_score?: number | null
          behavioral_insights?: string | null
          created_at?: string | null
          engagement_quality_score?: number | null
          feedback_themes?: string | null
          frequently_asked_questions?: string[] | null
          id?: string
          perceived_tool_value?: number | null
          platform?: string | null
          search_query?: string | null
          updated_at?: string | null
          urls?: Json | null
        }
        Relationships: []
      }
      vs_activity_logs: {
        Row: {
          action_type: string
          created_at: string | null
          id: string
          new_data: Json | null
          old_data: Json | null
          record_id: string | null
          record_title: string | null
          table_name: string
          user_email: string | null
          user_id: string | null
        }
        Insert: {
          action_type: string
          created_at?: string | null
          id?: string
          new_data?: Json | null
          old_data?: Json | null
          record_id?: string | null
          record_title?: string | null
          table_name: string
          user_email?: string | null
          user_id?: string | null
        }
        Update: {
          action_type?: string
          created_at?: string | null
          id?: string
          new_data?: Json | null
          old_data?: Json | null
          record_id?: string | null
          record_title?: string | null
          table_name?: string
          user_email?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      vs_page_content: {
        Row: {
          content: string
          id: string
          order_index: number
          page_type: string
          title: string
          updated_at: string | null
        }
        Insert: {
          content: string
          id?: string
          order_index?: number
          page_type: string
          title: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          id?: string
          order_index?: number
          page_type?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      vs_services: {
        Row: {
          animation_url: string
          created_at: string | null
          description: string
          id: string
          is_active: boolean | null
          order_index: number
          title: string
          updated_at: string | null
        }
        Insert: {
          animation_url: string
          created_at?: string | null
          description: string
          id?: string
          is_active?: boolean | null
          order_index?: number
          title: string
          updated_at?: string | null
        }
        Update: {
          animation_url?: string
          created_at?: string | null
          description?: string
          id?: string
          is_active?: boolean | null
          order_index?: number
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      vs_systems: {
        Row: {
          created_at: string | null
          description: string
          icon_url: string | null
          id: string
          is_active: boolean | null
          order_index: number
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          icon_url?: string | null
          id?: string
          is_active?: boolean | null
          order_index?: number
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          icon_url?: string | null
          id?: string
          is_active?: boolean | null
          order_index?: number
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      vs_team_members: {
        Row: {
          created_at: string | null
          first_name: string
          id: string
          is_active: boolean | null
          last_name: string
          linkedin_url: string
          order_index: number
          profile_image: string
          role: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          first_name: string
          id?: string
          is_active?: boolean | null
          last_name: string
          linkedin_url: string
          order_index?: number
          profile_image: string
          role: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          first_name?: string
          id?: string
          is_active?: boolean | null
          last_name?: string
          linkedin_url?: string
          order_index?: number
          profile_image?: string
          role?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      vs_testimonials: {
        Row: {
          additional_media_1: string | null
          additional_media_2: string | null
          client_name: string
          client_profile_pic: string | null
          company_logo: string | null
          company_name: string
          created_at: string | null
          demo_link: string | null
          highlight_text: string | null
          id: string
          is_active: boolean | null
          order_index: number | null
          stars: number
          testimonial_text: string
          updated_at: string | null
          video_thumbnail: string | null
          video_url: string | null
        }
        Insert: {
          additional_media_1?: string | null
          additional_media_2?: string | null
          client_name: string
          client_profile_pic?: string | null
          company_logo?: string | null
          company_name: string
          created_at?: string | null
          demo_link?: string | null
          highlight_text?: string | null
          id?: string
          is_active?: boolean | null
          order_index?: number | null
          stars: number
          testimonial_text: string
          updated_at?: string | null
          video_thumbnail?: string | null
          video_url?: string | null
        }
        Update: {
          additional_media_1?: string | null
          additional_media_2?: string | null
          client_name?: string
          client_profile_pic?: string | null
          company_logo?: string | null
          company_name?: string
          created_at?: string | null
          demo_link?: string | null
          highlight_text?: string | null
          id?: string
          is_active?: boolean | null
          order_index?: number | null
          stars?: number
          testimonial_text?: string
          updated_at?: string | null
          video_thumbnail?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
      vsf_runs: {
        Row: {
          created_at: string | null
          drafts: Json | null
          form_data: Json | null
          mode: string | null
          run_id: string
          selected_vertical: Json | null
          stage_four_data: Json | null
          stage_one_data: Json | null
          stage_three_data: Json | null
          stage_two_data: Json | null
          step_index: number | null
          top_three: string | null
          updated_at: string | null
          user_id: string
          vertical_source: string | null
        }
        Insert: {
          created_at?: string | null
          drafts?: Json | null
          form_data?: Json | null
          mode?: string | null
          run_id?: string
          selected_vertical?: Json | null
          stage_four_data?: Json | null
          stage_one_data?: Json | null
          stage_three_data?: Json | null
          stage_two_data?: Json | null
          step_index?: number | null
          top_three?: string | null
          updated_at?: string | null
          user_id: string
          vertical_source?: string | null
        }
        Update: {
          created_at?: string | null
          drafts?: Json | null
          form_data?: Json | null
          mode?: string | null
          run_id?: string
          selected_vertical?: Json | null
          stage_four_data?: Json | null
          stage_one_data?: Json | null
          stage_three_data?: Json | null
          stage_two_data?: Json | null
          step_index?: number | null
          top_three?: string | null
          updated_at?: string | null
          user_id?: string
          vertical_source?: string | null
        }
        Relationships: []
      }
      workflow_bridge: {
        Row: {
          assigned_agent: string | null
          classification: string
          created_at: string
          data_payload: Json
          error_message: string | null
          id: string
          max_retries: number
          meeting_id: string
          priority: number
          processed_at: string | null
          result_payload: Json | null
          retry_count: number
          status: string
          updated_at: string
        }
        Insert: {
          assigned_agent?: string | null
          classification: string
          created_at?: string
          data_payload: Json
          error_message?: string | null
          id?: string
          max_retries?: number
          meeting_id: string
          priority?: number
          processed_at?: string | null
          result_payload?: Json | null
          retry_count?: number
          status?: string
          updated_at?: string
        }
        Update: {
          assigned_agent?: string | null
          classification?: string
          created_at?: string
          data_payload?: Json
          error_message?: string | null
          id?: string
          max_retries?: number
          meeting_id?: string
          priority?: number
          processed_at?: string | null
          result_payload?: Json | null
          retry_count?: number
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      workflow_runs: {
        Row: {
          created_at: string | null
          duration: number | null
          id: string
          platforms: string[]
          run_id: string
          search_query: string
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          duration?: number | null
          id?: string
          platforms: string[]
          run_id: string
          search_query: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          duration?: number | null
          id?: string
          platforms?: string[]
          run_id?: string
          search_query?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      meetings_summary: {
        Row: {
          attendee_emails: Json | null
          classification: string | null
          created_at: string | null
          duration: number | null
          host_email: string | null
          id: string | null
          meeting_date: string | null
          overall_sentiment: string | null
          processed: boolean | null
          title: string | null
          transcript_length: number | null
        }
        Insert: {
          attendee_emails?: Json | null
          classification?: string | null
          created_at?: string | null
          duration?: number | null
          host_email?: string | null
          id?: string | null
          meeting_date?: string | null
          overall_sentiment?: never
          processed?: boolean | null
          title?: string | null
          transcript_length?: never
        }
        Update: {
          attendee_emails?: Json | null
          classification?: string | null
          created_at?: string | null
          duration?: number | null
          host_email?: string | null
          id?: string | null
          meeting_date?: string | null
          overall_sentiment?: never
          processed?: boolean | null
          title?: string | null
          transcript_length?: never
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      upwork_job_status:
        | "drafted"
        | "applied"
        | "responded"
        | "meeting"
        | "won"
        | "lost"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      upwork_job_status: [
        "drafted",
        "applied",
        "responded",
        "meeting",
        "won",
        "lost",
      ],
    },
  },
} as const
