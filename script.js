document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form1');
    const extraMedSelect = document.getElementById('ext-med');
    const extraTextArea = document.getElementById('extra');

    extraMedSelect.addEventListener('change', () => {
        if (extraMedSelect.value === 'yes') {
            extraTextArea.style.display = 'block';
            extraTextArea.required = true;
        } else {
            extraTextArea.style.display = 'none';
            extraTextArea.required = false;
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const problem = document.getElementById('problem').value;
        const age = parseInt(document.getElementById('age').value, 10);
        const medicines = document.getElementById('medicine-list');
        const exercises = document.getElementById('exercise-list');
        const insulinDose = document.getElementById('insulin-dose');

        medicines.innerHTML = '';
        exercises.innerHTML = '';
        insulinDose.innerHTML = '';

        // Example data for recommendations
        const recommendations = {
            diabetes: {
                medicines: ['Metformin', 'Insulin', 'Glipizide'],
                exercises: ['Walking', 'Cycling', 'Swimming'],
                insulinDoses: {
                    child: '0.5 to 1 unit/kg/day',
                    adolescent: '1 to 1.2 units/kg/day',
                    adult: '0.4 to 0.8 units/kg/day',
                    senior: '0.2 to 0.5 units/kg/day'
                }
            }
        };

        if (recommendations[problem]) {
            recommendations[problem].medicines.forEach(medicine => {
                const li = document.createElement('li');
                li.textContent = medicine;
                medicines.appendChild(li);
            });

            recommendations[problem].exercises.forEach(exercise => {
                const li = document.createElement('li');
                li.textContent = exercise;
                exercises.appendChild(li);
            });

            let doseRecommendation = 'Consult with your healthcare provider for accurate dosage.';
            if (age < 18) {
                doseRecommendation = recommendations[problem].insulinDoses.child;
            } else if (age >= 18 && age < 25) {
                doseRecommendation = recommendations[problem].insulinDoses.adolescent;
            } else if (age >= 25 && age < 65) {
                doseRecommendation = recommendations[problem].insulinDoses.adult;
            } else if (age >= 65) {
                doseRecommendation = recommendations[problem].insulinDoses.senior;
            }
            insulinDose.textContent = `Recommended Insulin Dose: ${doseRecommendation}`;
        } else {
            medicines.innerHTML = '<li>No recommendations available</li>';
            exercises.innerHTML = '<li>No recommendations available</li>';
        }
    });
});
