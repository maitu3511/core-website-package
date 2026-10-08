import React, { useState, useEffect } from "react";
import { X, CheckCircle, Send, UploadCloud, FileText } from "lucide-react";
import { QuoteFormData } from "../types";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string | undefined;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, preselectedService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Precision Injection Moulds",
    quantity: "1,000 - 10,000 pcs",
    timeline: "Immediate / Ready for Tooling",
    message: "",
    uploadedFileName: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs["name"] = "Please provide your full name";
    if (!formData.company.trim()) errs["company"] = "Please enter your company name";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs["email"] = "Please provide a valid email address";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs["phone"] = "Please provide a valid contact number";
    }
    if (!formData.message.trim()) {
      errs["message"] = "Please provide brief details of your component or tooling requirements";
    }
    return errs;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, uploadedFileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    const whatsappNumber = "919979043224";
    const message = `*NEW RFQ / QUOTATION INQUIRY - ADVAY ENGINEERS*
----------------------------------------
*Name:* ${formData.name}
*Company:* ${formData.company || "N/A"}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service Required:* ${formData.service}
*Estimated Quantity:* ${formData.quantity || "N/A"}
*Timeline:* ${formData.timeline || "Immediate"}
*Project Specifications:* ${formData.message}${formData.uploadedFileName ? `\n*Drawing/CAD Attached:* ${formData.uploadedFileName}` : ""}
----------------------------------------`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp immediately as requested
    const link = document.createElement("a");
    link.href = whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 300);
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0B2545]/75 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E8E1D3] overflow-hidden z-10 my-8 animate-fade-in max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[#E8E1D3] bg-[#FAF8F5]">
          <div>
            <span className="text-xs uppercase font-mono font-bold text-[#8B1E1E] tracking-wider">
              REQUEST FOR QUOTATION (RFQ)
            </span>
            <h2 className="text-2xl font-extrabold text-[#0B2545] mt-1">
              Start Your Tooling Project
            </h2>
          </div>
          <button
            onClick={handleReset}
            aria-label="Close dialog"
            className="w-10 h-10 rounded-full bg-white border border-[#E8E1D3] flex items-center justify-center text-[#0B2545] hover:text-[#8B1E1E] hover:border-[#8B1E1E] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B2545]">
                Quotation Request Received!
              </h3>
              <p className="text-[#0B2545]/80 text-sm max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to Advay Engineers. Our manufacturing engineering team
                will review your CAD / project specifications and send a detailed response within 24
                business hours.
              </p>
              <div className="pt-6">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-[#0B2545] hover:bg-[#8B1E1E] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B2545] uppercase tracking-wider mb-1 font-mono">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-2.5 rounded-xl border ${
                      errors["name"] ? "border-red-500 bg-red-50/30" : "border-[#E8E1D3]"
                    } focus:outline-none focus:border-[#0B2545] text-sm text-[#0B2545]`}
                  />
                  {errors["name"] && (
                    <p className="text-[11px] text-red-600 mt-1">{errors["name"]}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B2545] uppercase tracking-wider mb-1 font-mono">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Auto Components"
                    className={`w-full px-4 py-2.5 rounded-xl border ${
                      errors["company"] ? "border-red-500 bg-red-50/30" : "border-[#E8E1D3]"
                    } focus:outline-none focus:border-[#0B2545] text-sm text-[#0B2545]`}
                  />
                  {errors["company"] && (
                    <p className="text-[11px] text-red-600 mt-1">{errors["company"]}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B2545] uppercase tracking-wider mb-1 font-mono">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl border ${
                      errors["email"] ? "border-red-500 bg-red-50/30" : "border-[#E8E1D3]"
                    } focus:outline-none focus:border-[#0B2545] text-sm text-[#0B2545]`}
                  />
                  {errors["email"] && (
                    <p className="text-[11px] text-red-600 mt-1">{errors["email"]}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B2545] uppercase tracking-wider mb-1 font-mono">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-2.5 rounded-xl border ${
                      errors["phone"] ? "border-red-500 bg-red-50/30" : "border-[#E8E1D3]"
                    } focus:outline-none focus:border-[#0B2545] text-sm text-[#0B2545]`}
                  />
                  {errors["phone"] && (
                    <p className="text-[11px] text-red-600 mt-1">{errors["phone"]}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B2545] uppercase tracking-wider mb-1 font-mono">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E8E1D3] focus:outline-none focus:border-[#0B2545] text-xs text-[#0B2545] bg-white cursor-pointer"
                  >
                    <option value="Precision Injection Moulds">Precision Injection Moulds</option>
                    <option value="Injection Moulding Production">
                      Injection Moulding Production
                    </option>
                    <option value="OEM Manufacturing">OEM Manufacturing</option>
                    <option value="Product Development & DFM">Product Development & DFM</option>
                    <option value="Custom Engineering Plastic Components">
                      Custom Plastic Components
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B2545] uppercase tracking-wider mb-1 font-mono">
                    Batch Volume
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E8E1D3] focus:outline-none focus:border-[#0B2545] text-xs text-[#0B2545] bg-white cursor-pointer"
                  >
                    <option value="Prototype / Tool Trials">Prototype / Tool Trials</option>
                    <option value="1,000 - 10,000 pcs">1,000 - 10,000 pcs</option>
                    <option value="10,000 - 50,000 pcs">10,000 - 50,000 pcs</option>
                    <option value="50,000+ pcs (Mass Run)">50,000+ pcs (Mass Run)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B2545] uppercase tracking-wider mb-1 font-mono">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E8E1D3] focus:outline-none focus:border-[#0B2545] text-xs text-[#0B2545] bg-white cursor-pointer"
                  >
                    <option value="Immediate / Ready for Tooling">Immediate / Ready</option>
                    <option value="1 - 2 Months">1 - 2 Months</option>
                    <option value="Quarterly OEM Plan">Quarterly OEM Plan</option>
                  </select>
                </div>
              </div>

              {/* Upload Drawing Attachment */}
              <div>
                <label className="block text-xs font-semibold text-[#0B2545] uppercase tracking-wider mb-1 font-mono">
                  Upload CAD / Drawing (STEP, IGES, PDF, DWG)
                </label>
                <div className="border border-dashed border-[#E8E1D3] rounded-xl p-4 text-center hover:border-[#8B1E1E] transition-colors relative cursor-pointer bg-[#FAF8F5]">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    accept=".step,.stp,.iges,.igs,.pdf,.dwg,.dxf"
                  />
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    {formData.uploadedFileName ? (
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#0B2545]">
                        <FileText className="w-4 h-4 text-[#8B1E1E]" />
                        <span>Attached: {formData.uploadedFileName}</span>
                      </div>
                    ) : (
                      <>
                        <UploadCloud className="w-5 h-5 text-[#8B1E1E]" />
                        <p className="text-xs text-[#0B2545]/80">
                          Click to select STEP, IGES or 2D technical drawings
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2545] uppercase tracking-wider mb-1 font-mono">
                  Requirement Details / Specifications *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention target material (PA66, POM, ABS, etc.), part dimensions, number of cavities, special tolerances, or expected delivery milestones..."
                  className={`w-full px-4 py-2.5 rounded-xl border ${
                    errors["message"] ? "border-red-500 bg-red-50/30" : "border-[#E8E1D3]"
                  } focus:outline-none focus:border-[#0B2545] text-sm text-[#0B2545] resize-none`}
                />
                {errors["message"] && (
                  <p className="text-[11px] text-red-600 mt-1">{errors["message"]}</p>
                )}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#0B2545]/60 font-mono">
                  Strict NDA confidentiality guaranteed
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3.5 bg-[#8B1E1E] hover:bg-[#A32626] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting..." : "Submit RFQ"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
