import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Foody team. Send us your questions, feedback, or suggestions about our recipe app.",
  openGraph: {
    title: "Contact Us | Foody",
    description:
      "Get in touch with the Foody team. Send us your questions, feedback, or suggestions about our recipe app.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
