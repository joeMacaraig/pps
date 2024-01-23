"use client";
import React from "react";
import Creator from "./Creator";
import toast from "react-hot-toast";
import { sendEmail } from "../lib/sendEmail";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-full max-w-7xl mx-auto flex flex-col items-center justify-center sm:grid sm:grid-cols-2 md:place-items-center"
    >
      <Creator />
      <div className="w-full p-8">
        <h1 className="text-4xl font-bold">Lets Chat! <span className="">👋</span></h1>
        <p className="text-black mt-6">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:palasade.us@gmail.com">
            palasade.us@gmail.com
          </a>{" "}
          or through this form.
        </p>
        <form
          className="mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="h-14 px-4 rounded border dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded border p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <div className="flex justify-start gap-4">
            <button
              className=" bg-black text-white px-6 py-2 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
