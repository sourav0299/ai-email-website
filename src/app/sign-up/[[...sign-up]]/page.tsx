import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() { 
    return (
        <div className="flex item-center justify-center">
            <SignUp />
        </div>
    )
}