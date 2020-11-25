type MenuItem = {
    type: "link";
    title: string;
    to: string;
};

const menuLists: MenuItem[] = [
    {
        type: "link",
        title: "Registracija",
        to: "/registration"
    },
    {
        type: "link",
        title: "Paslaugos",
        to: "/services"
    },
    {
        type: "link",
        title: "Atsiliepimai",
        to: "/reviews"
    },
    {
        type: "link",
        title: "Kontaktai",
        to: "/contacts"
    }
];

export default menuLists;