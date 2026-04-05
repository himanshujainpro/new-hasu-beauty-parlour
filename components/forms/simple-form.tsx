"use client";

import { useState } from "react";

type SimpleFormProps = {
  title: string;
  description: string;
  fields: Array<{
    name: string;
    label: string;
    type?: string;
    placeholder: string;
  }>;
  buttonLabel: string;
  textarea?: {
    name: string;
    label: string;
    placeholder: string;
  };
};

export function SimpleForm({ title, description, fields, buttonLabel, textarea }: SimpleFormProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="glass-panel space-y-5 p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="space-y-2">
        <h3 className="font-display text-3xl text-berry">{title}</h3>
        <p className="text-sm leading-7 text-berry/75">{description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-medium text-berry">
            {field.label}
            <input className="input-field" type={field.type ?? "text"} name={field.name} placeholder={field.placeholder} required />
          </label>
        ))}
        {textarea ? (
          <label className="grid gap-2 text-sm font-medium text-berry md:col-span-2">
            {textarea.label}
            <textarea className="input-field min-h-32 resize-y" name={textarea.name} placeholder={textarea.placeholder} required />
          </label>
        ) : null}
      </div>

      <button type="submit" className="button-primary">
        {buttonLabel}
      </button>

      {submitted ? (
        <p className="rounded-2xl bg-blush px-4 py-3 text-sm text-berry">
          Demo form submitted. Replace this handler with an API route, email service or form platform when you are ready.
        </p>
      ) : null}
    </form>
  );
}
