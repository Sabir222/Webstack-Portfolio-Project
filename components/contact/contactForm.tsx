"use client";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
// import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Toaster, toast } from "sonner";

interface FormProps {
  //we cant do   type FormSchemaType = z.infer<typeof schema>;
  fullName: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations("ContactForm");

  const schema: ZodType<FormProps> = z.object({
    fullName: z
      .string()
      .min(2, " Full Name must contain at least 2 characters"),
    email: z.string().email(),
    message: z.string().min(1, "Don't be shy write something!"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
  });
  const submitData = async (data: FormProps) => {
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.ok) {
        setLoading(false);
        toast.success("Message sent successfully!");
      }
    } catch (err) {
      toast.error("Message not sent please try again!");
    }

    reset();
  };

  return (
    <>
      <div className=" p-[32px]  py-20">
        <div className="max-w-[1000px] mx-auto">
          <form
            className="flex flex-col gap-2 p-4 ring-[1px] rounded-xl  md:p-6 shadow-md bg-primaryColor text-white "
            onSubmit={handleSubmit(submitData)}
          >
            <label htmlFor=""> {t("fullName")}</label>
            {errors.fullName && (
              <span className="text-red-300">{errors.fullName.message}</span>
            )}
            <input
              type="text"
              className="py-2 pl-4 rounded-md bg-white  text-primaryColor"
              placeholder="John Doe"
              {...register("fullName")}
            />
            <label htmlFor=""> Email</label>
            {errors.email && (
              <span className="text-red-300">{errors.email.message}</span>
            )}
            <input
              type="email"
              className="py-2 pl-4 rounded-md bg-white text-primaryColor"
              placeholder="JohnDoe@gmail.com"
              {...register("email")}
            />
            <label htmlFor="">Message</label>
            {errors.message && (
              <span className="text-red-300">{errors.message.message}</span>
            )}
            <textarea
              cols={20}
              rows={10}
              className="p-4 rounded-md bg-white text-primaryColor"
              placeholder="Write your message here."
              {...register("message")}
            ></textarea>
            <div>
              <Button className="self-end w-[200px]">
                {loading ? <Loader2 className=" animate-spin" /> : "Send"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
