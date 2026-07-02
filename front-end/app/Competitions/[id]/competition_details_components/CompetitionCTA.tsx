"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CompetitionCTA() {
  const params = useParams();
  const id = params?.id as string;

  return (
    <section className="max-w-container-max mx-auto px-gutter py-xl mb-xl text-center">
      <div className="bg-primary-container p-xl rounded-3xl shadow-xl">
        <h2 className="font-display-lg text-display-lg text-on-primary-container mb-md">Ready to Build the Future?</h2>
        <p className="font-body-lg text-body-lg text-on-primary-container/80 mb-lg max-w-2xl mx-auto">
          Registration closes on October 10th. Secure your spot now and prepare for an unforgettable 48 hours.
        </p>
        <Link
          href={`/Competitions/${id}/register`}
          className="inline-block bg-secondary text-on-secondary px-8 py-4 rounded-lg font-headline-md text-headline-md shadow-lg hover:shadow-xl hover:bg-secondary-container transition-all"
        >
          Register Your Team Now
        </Link>
      </div>
    </section>
  );
}
