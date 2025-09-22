import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface EmailPreviewProps {
  formData: FormData;
  onClose: () => void;
}

const EmailPreview = ({ formData, onClose }: EmailPreviewProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-foreground">Email Preview</h2>
            <button 
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground text-xl"
            >
              ×
            </button>
          </div>
          
          {/* Email Card Design */}
          <Card className="border-2 border-primary/20 shadow-lg">
            {/* Email Header */}
            <CardHeader className="bg-gradient-to-r from-primary to-ocean text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 600 400" className="w-6 h-4">
                    <rect width="600" height="400" fill="#046A38"/>
                    <rect width="240" height="400" fill="#DA020E"/>
                    <circle cx="240" cy="200" r="50" fill="#FFE900" stroke="#046A38" strokeWidth="3"/>
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-white">New Contact Message</CardTitle>
                  <p className="text-white/90 text-sm">CommuniQ - Portugal Immigration Services</p>
                </div>
              </div>
            </CardHeader>

            {/* Email Content */}
            <CardContent className="p-6 space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-lg mb-2">Contact Details</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Name:</span> {formData.name}</p>
                  <p><span className="font-medium">Email:</span> {formData.email}</p>
                  <p><span className="font-medium">Phone:</span> {formData.phone}</p>
                </div>
              </div>

              <div className="border-l-4 border-ocean pl-4">
                <h3 className="font-semibold text-lg mb-2">Message</h3>
                <p className="text-muted-foreground whitespace-pre-wrap">{formData.message}</p>
              </div>

              <div className="border-t pt-6 mt-6">
                <h3 className="font-semibold text-lg mb-4">About CommuniQ</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Our Services</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Portugal Golden Visa</li>
                      <li>• D7 Visa Processing</li>
                      <li>• Real Estate Investment</li>
                      <li>• Education Consulting</li>
                      <li>• Healthcare Services</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Contact Information</h4>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>quliyevnamiq8@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+994 77 233 3838</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Nizami District, Baku</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span>CommuniQ.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center text-sm text-muted-foreground border-t pt-4">
                <p>This message was sent from the CommuniQ contact form</p>
                <p>© 2024 CommuniQ - Your Gateway to Portugal</p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> This is a preview of how your email would look. 
              Real email sending requires backend integration with Supabase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;