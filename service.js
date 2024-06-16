const detail = {
    name: "",
    Gender: "",
    SelectProblem: "",
    AnyExtraMedication: "",
    age: '',
    height: "",
    weight: "",
    bloodGroup: "",
    bloodPreasure: "",
};

const form1 = document.getElementById('form1');
const detailForm = document.getElementById('detailForm');

form1.addEventListener('submit', (e) => {
    e.preventDefault();
    const formdata = new FormData(form1);
    detail.name = formdata.get("name");
    detail.Gender = formdata.get("gender");
    detail.SelectProblem = formdata.get("problem");
    detail.AnyExtraMedication = formdata.get("extra");
    console.log(detail);

    const html = `<form class="ser-form" id="form2">
        <h1>Medical Details Collector</h1>
        <div class="input-field">
            <label for="">Age:</label>
            <input type="number" name="age" id="" placeholder="Enter your Age" required>
        </div>
        <div class="input-field">
            <label for="">height (in cm):</label>
            <input type="number" name="ht" id="" placeholder="Enter your height" required>
        </div>
        <div class="input-field">
            <label for="">weight (in kg):</label>
            <input type="number" name="wt" id="" placeholder="Enter your weight" required>
        </div>
        <div class="input-field">
            <label for="">Blood Group:</label>
            <select required name='bdg'>
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>
        </div>
        <div class="input-field">
            <label for="">Blood Pressure (e.g., 120/80):</label>
            <input type="text" name="bdp" id="" placeholder="Enter your Blood Preasure like 120/80" required>
        </div>
        <div class="input-field">
            <input type="submit" value="Next">
        </div>
    </form>
    <div class="image">
        <img src="./images/vecteezy_cute-doctor-women-compassionate-and-skilled-models-for_22484658.png" alt="">
    </div>`

    detailForm.innerHTML = html;

    const form2 = document.getElementById('form2');
    form2.addEventListener('submit', nextform);
});

const nextform = (e) => {
    e.preventDefault();
    const form2 = document.getElementById('form2');
    const formdata = new FormData(form2);
    detail.age = formdata.get("age");
    detail.height = formdata.get("ht");
    detail.weight = formdata.get("wt");
    detail.bloodGroup = formdata.get("bdg");
    detail.bloodPreasure = formdata.get("bdp");
    console.log(detail);

    let suggestions = "";

    if (detail.SelectProblem === "diabetes") {
        suggestions = `
            <ul>
                <li style="font-size:18px;margin-top: 10px; font-weight:550;">
                    <b>Insulin Dose:</b> Based on your age, weight, and blood sugar levels, a daily insulin dose of ${calculateInsulinDose()} units might be recommended. Consult with your doctor for a personalized dosage.
                </li>
                <li style="font-size:18px; margin-top: 10px; font-weight:550;">
                    <b>Yoga Practices:</b> Consider incorporating these yoga poses into your daily routine for better blood sugar management:
                        <ul>
                            <li>Sarvangasana (Shoulder Stand)</li>
                            <li>Halasana (Plough Pose)</li>
                            <li>Paschimottanasana (Seated Forward Bend)</li>
                        </ul>
                </li>
                <li style="font-size:18px; margin-top: 10px; font-weight:550;">
                    <b>Medication:</b> Consult with your doctor for appropriate medication.
                </li>
            </ul>
        `;
    } else if (detail.SelectProblem === "high-blood-pressure") {
        suggestions = `
            <ul>
                <li style="font-size:18px;margin-top: 10px; font-weight:550;">
                    <b>Lifestyle Changes:</b> Consider adopting a healthier lifestyle with regular exercise, a balanced diet low in sodium, and stress management techniques.
                </li>
                <li style="font-size:18px; margin-top: 10px; font-weight:550;">
                    <b>Yoga Practices:</b> Practices like Pranayama (breathing exercises) and meditation can help lower blood pressure and reduce stress.
                </li>
                <li style="font-size:18px; margin-top: 10px; font-weight:550;">
                    <b>Medication:</b> Consult with your doctor for appropriate medication.
                </li>
            </ul>
        `;
    } else if (detail.SelectProblem === "fever") {
        suggestions = `
            <ul>
                <li style="font-size:18px; margin-top: 10px; font-weight:550;">
                    <b>Medication:</b>
                    ${getFeverMedication()}
                </li>
                <li style="font-size:18px; margin-top: 10px; font-weight:550;">
                    <b>Rest and Fluids:</b> Get plenty of rest and stay hydrated by drinking fluids like water, broth, or herbal teas.
                </li>
                <li style="font-size:18px; margin-top: 10px; font-weight:550;">
                    <b>Warm Compress:</b> Apply a warm compress to the forehead or body to relieve discomfort.
                </li>
            </ul>
        `;
    } else {
        suggestions = `
            <ul>
                <li style="font-size:18px;margin-top: 10px; font-weight:550;">
                    <b>General Health Tips:</b> Maintain a balanced diet, get regular exercise, and manage stress effectively for overall well-being.
                </li>
                <li style="font-size:18px; margin-top: 10px; font-weight:550;">
                    <b>Yoga Practices:</b> Consider exploring yoga practices tailored to your specific needs, such as Surya Namaskar (Sun Salutations) or Vinyasa flow.
                </li>
                <li style="font-size:18px; margin-top: 10px; font-weight:550;">
                    <b>Medication:</b> Consult with your doctor for appropriate medication.
                </li>
            </ul>
        `;
    }

    detailForm.innerHTML = `<div class="image"><img style="width: 90%; aspect-ratio: 1; padding-left:30px;"
    src="./images/vecteezy_expert-and-caring-doctor-women-skilled-and-nurturing-models_22483927.png" alt="">
</div>
<div class="person-details" id="doc">
<h1>Medical Details Analysis</h1>
<h2>name : ${detail.name}</h2>
<h2>Age : ${detail.age}</h2>
<h2>Gender : ${detail.Gender}</h2>
<h2> height: ${detail.height}</h2>
<h2>weight : ${detail.weight}</h2>
<h2>bloodGroup: ${detail.bloodGroup}</h2>
<h2>bloodPreasure: ${detail.bloodPreasure} </h2>
<h2>Problem : ${detail.SelectProblem}</h2>
<hr style="width:100%;text-align:left;margin-left:0">
<h1 style="margin-top: 20px;">Suggestions</h1> 
<div style="width: 90%; font-weight: 500; margin-top: 10px;">
    ${suggestions}
</div>
<button class="print" id="btn">Print</button>
</div>`

    const btn = document.getElementById('btn');
    btn.addEventListener('click', print);
};

const print = () => {
    const doc = document.getElementById('doc');
    html2canvas(doc).then(function (canvas) {
        var imgData = canvas.toDataURL('image/png');
        var pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 3, 3);
        pdf.save(detail.name);
    });
};

// Placeholder for insulin dose calculation (replace with actual logic)
function calculateInsulinDose() {
    // This is a very simplified example, you'll need more sophisticated logic
    return Math.round(detail.weight * 0.5); // Assuming weight in kg
}

// Function to suggest fever medication
function getFeverMedication() {
    let medication = "";
    let bpParts = detail.bloodPreasure.split("/");
    let systolicBP = parseInt(bpParts[0]);

    if (detail.age < 12) {
        if (systolicBP >= 110) {
            medication = `<li><b>Paracetamol (Acetaminophen)</b>: 10-15 mg/kg every 4-6 hours. </li>
            <li><b>Ibuprofen</b>: 5-10 mg/kg every 6-8 hours (consult a doctor before giving ibuprofen to children).</li>`;
        } else {
            medication = `<li><b>Paracetamol (Acetaminophen)</b>: 10-15 mg/kg every 4-6 hours. </li>`;
        }
    } else {
        if (systolicBP >= 140) {
            medication = `<li><b>Ibuprofen</b>: 400-800 mg every 4-6 hours. </li>
            <li><b>Paracetamol (Acetaminophen)</b>: 500-1000 mg every 4-6 hours. </li>`;
        } else {
            medication = `<li><b>Paracetamol (Acetaminophen)</b>: 500-1000 mg every 4-6 hours. </li>`;
        }
    }
    return medication;
}