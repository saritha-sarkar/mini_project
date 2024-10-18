<script>
    const testimonials = document.querySelectorAll('.testimonial');

    testimonials.forEach(testimonial => {
        testimonial.addEventListener('click', () => {
            // Remove 'active' class from all testimonials
            testimonials.forEach(t => t.classList.remove('active'));
            // Add 'active' class to the clicked testimonial
            testimonial.classList.add('active');
        });
    });
</script>
