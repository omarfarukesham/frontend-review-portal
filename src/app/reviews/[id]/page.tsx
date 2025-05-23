
import ReviewDetails from '@/components/ReviewDetails';
import { Review } from '@/types/review';
import { notFound } from 'next/navigation';
import type { Metadata } from "next"

async function getReviewById(id: string): Promise<Review | null> {
  try {
    const res = await fetch(`https://backend-server-review-portal.vercel.app/api/v1/review/${id}`, {
      cache: 'no-store',
    });
    const json = await res.json();

    if (!res.ok || !json.success) return null;

    return json.data;
  } catch {
    return null;
  }
}
export const metadata: Metadata = {
  title: "Review Details | Your Product",
  description: "Detailed customer review information",
}
export default async function ReviewPage({ params }: { params: { id: string } }) {
  const id = params.id

  const review = await getReviewById(id);

  if (!review) return notFound();

  return(
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-300">
      <ReviewDetails review={review} />
    </div>
  );
}
