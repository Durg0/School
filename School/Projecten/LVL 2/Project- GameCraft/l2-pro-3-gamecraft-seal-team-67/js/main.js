document.addEventListener('DOMContentLoaded', () => {

    const counters = document.querySelectorAll('.count');
    function animateCount(el, target, prefix, suffix) {
        let current = 0;
        let speed = target / 50;

        function update() {
            current += speed;

            if (current < target) {
                el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
                requestAnimationFrame(update);
            } else {
                el.textContent = prefix + target.toLocaleString() + suffix;
            }
        }

        update();
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const el = entry.target;
            const target = parseInt(el.dataset.target);
            const prefix = el.dataset.prefix || "";
            const suffix = el.dataset.suffix || "";

            animateCount(el, target.toLocaleString("en-US"), prefix, suffix);

            observer.unobserve(el);
        });
    });
    

    counters.forEach(c => {
        const prefix = c.dataset.prefix || "";
        const suffix = c.dataset.suffix || "";
        c.textContent = prefix + "0" + suffix;
        observer.observe(c);
    });

});