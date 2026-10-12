function onOff(click) {
    const button = document.querySelector(`.js-${click}-btn`);

    if (!button.classList.contains('is-toggle')) {
        const previousButton = document.querySelector('.is-toggle');
        if (previousButton) {
            previousButton.classList.remove('is-toggle');
        }

        button.classList.add('is-toggle');
    } else {
        button.classList.remove('is-toggle');
    }
}