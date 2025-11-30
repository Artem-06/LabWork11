$(function() {
    const words = [
        { word: "always", translation: "завжди" },
        { word: "never", translation: "ніколи" },
        { word: "sometimes", translation: "іноді" },
        { word: "usually", translation: "зазвичай" },
        { word: "often", translation: "часто" },
        { word: "rarely", translation: "рідко" },
        { word: "daily", translation: "щоденно" },
        { word: "weekly", translation: "щотижня" },
        { word: "annually", translation: "щорічно" },
        { word: "hello", translation: "привіт" }
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(words);

    const TOTAL = words.length;
    let idx = 0;
    const states = Array(TOTAL).fill(null);

    function render() {
        const cur = words[idx];
        $('#current-word').text(cur.word);
        $('#count').text(`${idx + 1}/${TOTAL}`);
        $('#translation-input')
            .val(states[idx] === true ? cur.translation : '') // показує правильний переклад тільки коли вірно
            .prop('disabled', states[idx] !== null)
            .css('border-color', states[idx] === true ? 'green' : states[idx] === false ? 'red' : '#007bff');
        updateStats();
    }

    function updateStats() {
        const correct = states.filter(s => s === true).length;
        const incorrect = states.filter(s => s === false).length;
        $('#correct-count').text(correct);
        $('#incorrect-count').text(incorrect);
    }

    function checkCurrent() {
        if (states[idx] !== null) return; // вже перевірено
        const input = $('#translation-input').val().trim().toLowerCase();
        if (!input) {
            alert('Введіть переклад перед перевіркою!');
            return;
        }
        const correct = words[idx].translation.toLowerCase();
        states[idx] = (input === correct);
        render();
        // якщо всі перевірені — показуємо результат
        if (states.every(s => s !== null)) showResult();
    }

    function showResult() {
        const correct = states.filter(s => s === true).length;
        const pct = Math.round((correct / TOTAL) * 100);
        let level = 'Початковий (D)';
        if (pct >= 90) level = 'Відмінний (A)';
        else if (pct >= 70) level = 'Хороший (B)';
        else if (pct >= 50) level = 'Середній (C)';

        $('#knowledge-level').text(
            `Ви відповіли правильно на ${correct} з ${TOTAL} слів. Ваш відсоток: ${pct}%. Рівень: ${level}.`
        );
        $('#modal').removeClass('hidden');
    }

    $('#word-card').on('click', checkCurrent);
    $('#previous-btn').on('click', () => {
        if (idx > 0) { idx--; render(); }
    });
    $('#next-btn').on('click', () => {
        if (idx < TOTAL - 1) { idx++; render(); }
    });
    $('#statistics-link').on('click', showResult);
    $('#close-modal').on('click', () => $('#modal').addClass('hidden'));

    $('#translation-input').on('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            checkCurrent();
        }
    });

    render();
});