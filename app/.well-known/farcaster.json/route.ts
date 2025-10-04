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
            header: "eyJmaWQiOjQ5MzE4NiwidHlwZSI6ImF1dGgiLCJrZXkiOiIweDc5MmNBNDJGMkMyZjlEOWZCNTZkREJiZkU5YTA5MTZBRTZlOThERDgifQ",
            payload: "eyJkb21haW4iOiJjaGF0c29ja2V0LW5leHRqcy52ZXJjZWwuYXBwIn0",
            signature:
                "GJgtAupZChLw1ye8Jhsp8DXI593BjmtxP8Xdp8HvYjACMstQG1d4Kd3b1/z8sNT4ynTlZlJ9iIepYRGM1jol7Rs=",
        },
        baseBuilder: {
            allowedAddresses: ["0x63776AE89Da21B51D74435142C9768d1A2ebe4F3"], // add your Base Account address here
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
