import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFab({ waNumber }: { waNumber: string }) {
  return (
    <a
      className="whatsapp-fab"
      href={`https://wa.me/${waNumber}?text=Hello%20I%20am%20interested%20in%20your%20services`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <WhatsAppIcon size={22} />
    </a>
  );
}
