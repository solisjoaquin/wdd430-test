const WhatsappLink = ({ title }: { title: string }) => {
  const phone = "5493884601000";
  const text = `Hi, I'm interested in : ${title}`;
  return (
    <a
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Ask
    </a>
  );
};

export default WhatsappLink;
