import JoinOurNewsletterModal from '@/components/modals/join-our-newsletter-modal';
import { Modal } from './modal';

export default async function NewsletterModal() {
  // Render
  return <Modal><JoinOurNewsletterModal /></Modal>;
}