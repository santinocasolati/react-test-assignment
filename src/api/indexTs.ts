export function loginTs(data: { email: string, password: string }) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (data.email === "elon@mercdev.com" && data.password === "twitter") {
                resolve({ data: { avatar: "/avatar.jpeg", name: "Elon" } });
            } else {
                resolve({ error: "Incorrect email or password" });
            }
        }, 1000);
    });
}
