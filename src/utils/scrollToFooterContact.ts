export function scrollToFooterContact(options?: { updateHash?: boolean }) {
  if (typeof window === 'undefined') return;

  const target = document.getElementById('footer-contact');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Add brief highlight accent to draw attention to the contact details
    target.classList.add(
      'ring-2',
      'ring-cyan-400/70',
      'bg-cyan-500/10',
      'shadow-lg',
      'shadow-cyan-500/20',
      'rounded-2xl'
    );
    setTimeout(() => {
      target.classList.remove(
        'ring-2',
        'ring-cyan-400/70',
        'bg-cyan-500/10',
        'shadow-lg',
        'shadow-cyan-500/20',
        'rounded-2xl'
      );
    }, 2200);

    if (options?.updateHash) {
      try {
        window.history.pushState(null, '', '#footer-contact');
      } catch {
        // ignore if pushState is restricted
      }
    }
  }
}

export default scrollToFooterContact;

