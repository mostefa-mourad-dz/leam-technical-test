import { Renovation } from "@leam-tech/renovation-core";

const backend = "frappe";
const hostUrl = "https://cookbook-dev-backend.leam.ae";

export default async ({ app }, inject) => {
    const renovation = new Renovation();
    await renovation.init(backend, hostUrl, "test-site");
    // Inject $renovation in Vue, context and store.
    inject('renovation', renovation);
}