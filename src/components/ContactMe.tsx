import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const ContactMe = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // <-- guardamos el form

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: t("contact.success"),
          showConfirmButton: false,
          timer: 2000,
        });
        form.reset();
      })
      .catch((err) => {
        console.error(err); // para ver detalles en la consola
        Swal.fire({
          icon: "error",
          title: t("contact.error"),
          text: err?.text || "Oops! Something went wrong",
        });
      });
  };

  return (
    <section id="contact" className="w-full py-16 px-6 md:px-20 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{t("contact.title1")}</h2>
        <p className="text-gray-300 mb-8">{t("contact.desc")}</p>

        <form
          className="glass-card bg-black/40 p-8 rounded-2xl shadow-lg flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col text-left">
            <label htmlFor="name" className="text-sm mb-2 font-medium">
              {t("contact.lb1")}
            </label>
            <input
              id="name"
              name="user_name"
              type="text"
              required
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder={t("contact.pc1")}
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="email" className="text-sm mb-2 font-medium">
              {t("contact.lb2")}
            </label>
            <input
              id="email"
              name="user_email"
              type="email"
              required
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder={t("contact.pc2")}
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="message" className="text-sm mb-2 font-medium">
              {t("contact.lb3")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder={t("contact.pc3")}
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all font-semibold py-3 rounded-lg shadow-md hover:shadow-cyan-500/30 cursor-pointer"
          >
            {t("contact.sub")}
          </button>
        </form>
      </div>
    </section>
  );
};
