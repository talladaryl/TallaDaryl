declare module "@emailjs/browser" {
  export function sendForm(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement | string,
    publicKey: string
  ): Promise<{ text: string }>;
}
