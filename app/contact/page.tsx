import HeaderContact from "./HeaderContact"
import EnquiryForm from "./Enquiry"
import Location from "./Location"
import Legal from "./Legal"

export default function ContactPage() {
    return (
        <main className="bg-background min-h-screen text-text-main">
            <HeaderContact />
            <EnquiryForm />
            <Location />
            <Legal />


        </main>
    );
}