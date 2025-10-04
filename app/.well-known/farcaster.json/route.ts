function withValidProperties(
    properties: Record<string, undefined | string | string[]>
) {
    return Object.fromEntries(
        Object.entries(properties).filter(([_, value]) =>
            Array.isArray(value) ? value.length > 0 : !!value
        )
    );
}

export async function GET() {
    const URL = process.env.NEXT_PUBLIC_URL as string;
    return Response.json({
        accountAssociation: {
            // these will be added in step 5
            header: "",
            payload: "",
            signature: "",
        },
        baseBuilder: {
            allowedAddresses: ["0x792cA42F2C2f9D9fB56dDBbfE9a0916AE6e98DD8"], // add your Base Account address here
        },
        miniapp: {
            version: "1",
            name: "ChatApp",
            homeUrl: URL,
            iconUrl: `${URL}/i.png`,
            splashImageUrl: `${URL}/l.png`,
            splashBackgroundColor: "#000000",
            webhookUrl: `${URL}/api/webhook`,
            subtitle: "Fast, fun, social",
            description: "A fast, fun way to chat with friends in real time.",
            screenshotUrls: [`${URL}/s1.png`, `${URL}/s2.png`, `${URL}/s3.png`],
            primaryCategory: "social",
            tags: ["miniapp", "baseapp"],
            heroImageUrl: `${URL}/og.png`,
            tagline: "Chat for fun",
            ogTitle: "Chat Mini App",
            ogDescription: "Chat with friends in real time.",
            ogImageUrl: `${URL}/og.png`,
            noindex: true,
        },
    }); // see the next step for the manifest_json_object
}
