import { db } from '../../../../server/db';

export const POST = async (req: Request) => {
    try {
        const { data } = await req.json();
        const { email_addresses, first_name, last_name, image_url, id } = data;

        await db.user.create({
            data: {
                email: email_addresses[0].email_address,
                firstName: first_name,
                lastName: last_name,
                imgUrl: image_url,
                id: id,
            },
        });

        return new Response('Webhook received', { status: 200 });
    } catch (error) {
        console.error('Error processing webhook:', error);
        return new Response('Error processing webhook', { status: 500 });
    }
}

