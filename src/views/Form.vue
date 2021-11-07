<template>
  <v-stepper class="stepper elevation-2" v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        Basic Details
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Admission Form</v-stepper-step
      >
      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">
        Address Details</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">
        Academic Details</v-stepper-step
      >
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 5" step="5">
        Professional Details
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="6"> Declaration </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12 elevation-0" min-height="200px">
          <v-text-field
            v-model="formDetails.s1.name"
            label="Full Name ( As per Qualifying Exam Marks card )"
            filled
          ></v-text-field>
          <v-text-field
            v-model="formDetails.s1.dept"
            label="Department applied for"
            filled
          ></v-text-field>
          <v-text-field
            v-model="formDetails.s1.year"
            label="Ph.D for the year"
            filled
          ></v-text-field>
          <v-text-field
            v-model="formDetails.s1.area"
            label="Area of research"
            filled
          ></v-text-field> </v-card
        ><v-divider class="my-5"></v-divider>
        <div class="btn-container">
          <v-btn color="primary" @click="e1 = 2"> Next </v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12 elevation-0" min-height="200px">
          <div class="d-flex">
            <v-text-field
              v-model="formDetails.s2.reg"
              label="VTU-ETR Reg. No"
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s2.score"
              label="Score"
              filled
              class="mx-5"
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s2.year"
              label="Year of VTU-ETR"
              filled
            ></v-text-field>
          </div>
          <v-select
            :items="eligibility"
            v-model="formDetails.s2.eligibility"
            filled
            label="Any other eligibility criterion "
          ></v-select>
          <div class="d-flex">
            <v-text-field
              v-model="formDetails.s2.fname"
              label="First Name"
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s2.mname"
              label="Middle Name"
              filled
              class="mx-5"
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s2.lname"
              label="Last Name/Surname/Initials"
              filled
            ></v-text-field>
          </div>
          <div class="d-flex">
            <v-text-field
              v-model="formDetails.s2.date"
              label="Date of Birth"
              type="date"
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s2.gender"
              label="Gender"
              filled
              class="mx-5"
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s2.blood"
              label="Blood Group"
              filled
            ></v-text-field>
          </div>
          <div class="d-flex">
            <v-text-field
              v-model="formDetails.s2.aname"
              label="Father's/Husband's Name"
              class="mr-2"
              filled
            ></v-text-field>
            <v-select
              :items="category"
              v-model="formDetails.s2.category"
              filled
              class="ml-2"
              label="Category"
            ></v-select>
          </div>
        </v-card>
        <v-divider class="my-5"></v-divider>
        <div class="btn-container">
          <v-btn class="mr-3" @click="e1 = 1"> Back </v-btn>
          <v-btn color="primary" @click="e1 = 3"> Next </v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12 elevation-0" min-height="200px">
          <h2>Address for Communication</h2>
          <v-divider class="my-5"></v-divider>
          <div class="d-flex">
            <v-select
              :items="states"
              v-model="formDetails.s3.communication.state"
              filled
              label="State"
            ></v-select>
            <v-text-field
              v-model="formDetails.s3.communication.city"
              label="City"
              filled
              class="mx-5"
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s3.communication.pincode"
              label="Pincode"
              filled
            ></v-text-field>
          </div>
          <v-text-field
            v-model="formDetails.s3.communication.phno"
            label="Phone Number (with Code)"
            filled
          ></v-text-field>
          <h2>Permanent Address</h2>
          <v-divider class="my-5"></v-divider>
          <div class="d-flex">
            <v-select
              :items="states"
              v-model="formDetails.s3.permanent.state"
              filled
              label="State"
            ></v-select>
            <v-text-field
              v-model="formDetails.s3.permanent.city"
              label="City"
              filled
              class="mx-5"
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s3.permanent.pincode"
              label="Pincode"
              filled
            ></v-text-field>
          </div>
          <div class="d-flex">
            <v-text-field
              v-model="formDetails.s3.permanent.mobile"
              label="Mobile No."
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s3.permanent.phno"
              label="Phone No. (with Code)"
              class="mx-5"
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s3.permanent.emergency"
              label="Emergency Contact Number "
              filled
            ></v-text-field>
          </div>
          <div class="d-flex">
            <v-text-field
              v-model="formDetails.s3.permanent.email"
              label="Email ID"
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s3.permanent.domicile"
              label="Domicile"
              class="mx-5"
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s3.permanent.motherTongue"
              label="Mother Tongue"
              filled
            ></v-text-field>
          </div>
          <div class="d-flex">
            <v-text-field
              v-model="formDetails.s3.permanent.pob"
              label="Place of birth"
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s3.permanent.sob"
              label="State of Birth"
              class="mx-5"
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s3.permanent.nationality"
              label="Nationality"
              filled
            ></v-text-field>
          </div>
        </v-card>
        <v-divider class="my-5"></v-divider>
        <div class="btn-container">
          <v-btn class="mr-3" @click="e1 = 2"> Back </v-btn>
          <v-btn color="primary" @click="e1 = 4"> Next </v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card class="mb-12 elevation-0" min-height="200px">
          <h2>UG Details</h2>
          <v-divider class="my-5"></v-divider>
          <div class="d-flex">
            <v-text-field
              v-model="formDetails.s4.ug.college"
              label="College"
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s4.ug.univ"
              label="University"
              class="mx-5"
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s4.ug.yop"
              label="Year of Passing"
              filled
            ></v-text-field>
          </div>
          <div class="d-flex">
            <v-text-field
              v-model="formDetails.s4.ug.specialization"
              label="Specialization"
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s4.ug.cgpa"
              label="Percentage/CGPA"
              filled
              class="mx-5"
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s4.ug.thesis"
              label="Title of UG Thesis"
              filled
            ></v-text-field>
          </div>
          <h2>PG Details</h2>
          <v-divider class="my-5"></v-divider>
          <div class="d-flex">
            <v-text-field
              v-model="formDetails.s4.pg.college"
              label="College"
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s4.pg.univ"
              label="University"
              class="mx-5"
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s4.pg.yop"
              label="Year of Passing"
              filled
            ></v-text-field>
          </div>
          <div class="d-flex">
            <v-text-field
              v-model="formDetails.s4.pg.specialization"
              label="Specialization"
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s4.pg.cgpa"
              label="Percentage/CGPA"
              filled
              class="mx-5"
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s4.pg.thesis"
              label="Title of PG Thesis"
              filled
            ></v-text-field>
          </div>
        </v-card>
        <v-divider class="my-5"></v-divider>
        <div class="btn-container">
          <v-btn class="mr-3" @click="e1 = 3"> Back </v-btn>
          <v-btn color="primary" @click="e1 = 5"> Next </v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-content step="5">
        <v-card class="mb-12 elevation-0" min-height="200px">
          <h2>Details of Employment (if applicable)</h2>
          <v-divider class="my-5"></v-divider>
          <div class="d-flex">
            <v-text-field
              v-model="formDetails.s5.name"
              label=" Name of the Institute/Organization"
              filled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s5.designation"
              label="Designation"
              filled
              class="mx-5"
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s5.yoe"
              label="Years of Experience"
              filled
            ></v-text-field>
          </div>
          <h2>Professional details in reverse chronological order</h2>
          <v-divider class="my-5"></v-divider>
          <div>
            <div v-for="(i, index) in profCount" :key="index">
              <div class="d-flex align-center">
                <p class="mr-5">{{ index + 1 }}.</p>
                <v-text-field
                  v-model="formDetails.s5.profDetails.name[index]"
                  label="Name of the Institute/Organization"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.profDetails.designation[index]"
                  label="Designation"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.profDetails.from[index]"
                  label="From"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.profDetails.to[index]"
                  label="To"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.profDetails.noy[index]"
                  label="No. of years"
                  filled
                ></v-text-field>
              </div>
            </div>
            <div class="btn-container">
              <v-btn color="black" class="white--text" @click="updateCount(1)"
                >Add More</v-btn
              >
            </div>
          </div>
          <h2>Details of Publications in last 3 years</h2>
          <v-divider class="my-5"></v-divider>
          <div>
            <div v-for="(i, index) in publicationCount" :key="index">
              <div class="d-flex align-center">
                <p class="mr-5">{{ index + 1 }}.</p>
                <v-text-field
                  v-model="formDetails.s5.publications.names[index]"
                  label="Name of Authors"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.publications.title[index]"
                  label="Title of Paper"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.publications.jc[index]"
                  label="Journal/Conference"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.publications.namejc[index]"
                  label="Name of Journal/Conference"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.publications.doi[index]"
                  label="Vol issue, DOI"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.publications.year[index]"
                  label="Year"
                  filled
                ></v-text-field>
              </div>
            </div>
            <div class="btn-container">
              <v-btn color="black" class="white--text" @click="updateCount(2)"
                >Add More</v-btn
              >
            </div>
          </div>

          <h2>Details of Funded/Consultancy Projects</h2>
          <v-divider class="my-5"></v-divider>
          <div>
            <div v-for="(i, index) in projectCount" :key="index">
              <div class="d-flex align-center">
                <p class="mr-5">{{ index + 1 }}.</p>
                <v-text-field
                  v-model="formDetails.s5.projects.name[index]"
                  label="Name of Investigator/s"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.projects.org[index]"
                  label="Name of the Organization"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.projects.title[index]"
                  label="Title of Project"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.projects.amt[index]"
                  label="Amount Sanctioned"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.projects.yos[index]"
                  label="Year of Sanction"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.projects.duration[index]"
                  label="Duration"
                  filled
                ></v-text-field>
              </div>
            </div>
            <div class="btn-container">
              <v-btn color="black" class="white--text" @click="updateCount(3)"
                >Add More</v-btn
              >
            </div>
          </div>

          <h2>Patents if any</h2>
          <v-divider class="my-5"></v-divider>
          <div>
            <div v-for="(i, index) in patentCount" :key="index">
              <div class="d-flex align-center">
                <p class="mr-5">{{ index + 1 }}.</p>
                <v-text-field
                  v-model="formDetails.s5.patents.name[index]"
                  label="Name of Investigator/s"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.patents.title[index]"
                  label="Title of Patent"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.patents.number[index]"
                  label="Number"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.patents.filed[index]"
                  label="Filed/Published/Granted"
                  filled
                  class="mr-5"
                ></v-text-field>
                <v-text-field
                  v-model="formDetails.s5.patents.year[index]"
                  label="Year"
                  filled
                  class="mr-5"
                ></v-text-field>
              </div>
            </div>
            <div class="btn-container">
              <v-btn color="black" class="white--text" @click="updateCount(4)"
                >Add More</v-btn
              >
            </div>
          </div>
        </v-card>
        <v-divider class="my-5"></v-divider>
        <div class="btn-container">
          <v-btn class="mr-3" @click="e1 = 4"> Back </v-btn>
          <v-btn color="primary" @click="e1 = 6"> Next </v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-content step="6">
        <v-card class="mb-12 elevation-0" min-height="200px">
          <h2>Declaration By The Candidate</h2>
          <v-divider class="my-5"></v-divider>
          <ol>
            <li>
              I declare that particulars and information furnished are fully
              correct.
            </li>
            <li>
              If there is any false information/fake certificate or any forgery
              in the particulars / certificates / documents submitted by me to
              the authorities of RIT /University, my admission may at once be
              cancelled and necessary action may be taken.
            </li>
            <li>
              I do understand that, my admission at RIT is provisional and
              subject to approval of the VTU, Belagavi.
            </li>
            <li>
              I Promise to abide by the rules and regulations of the Institution
              and the University, and I can be subjected to disciplinary action,
              if need arises, and also I can be dismissed from the college, if I
              am found not obeying the rules and regulations
            </li>
            <li>
              I agree to adhere to Rules and Regulations, Scheme of study and
              Examinations of the Autonomous Institute, affiliated to
              Visvesvaraya Technological University, Belagavi.
            </li>
          </ol>
          <div class="btn-container">
            <v-checkbox
              class="mr-7"
              v-model="formDetails.s6.checkbox"
              label="I agree"
            ></v-checkbox>
          </div>
        </v-card>
        <v-divider class="my-5"></v-divider>
        <div class="btn-container">
          <v-btn class="mr-3" @click="e1 = 5"> Back </v-btn>
          <v-btn :disabled="!formDetails.s6.checkbox" color="primary">
            Print
          </v-btn>
        </div>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      e1: 6,
      profCount: [0],
      publicationCount: [0],
      projectCount: [0],
      patentCount: [0],
      eligibility: [
        "ADF",
        "QIP",
        "FIP",
        "UGC_NET",
        "UGC_CSIR_NET",
        "SLET",
        "GATE",
        "CAT",
      ],
      category: ["GM", "SC", "ST", "OBC", "NRI"],
      states: [
        "Andaman and Nicobar Islands",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chandigarh",
        "Chhattisgarh",
        "Dadra and Nagar Haveli and Daman and Diu",
        "Goa",
        "Gujurat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerela",
        "Ladakh",
        "Lakshadweep",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "NCT of Delhi",
        "Odisha",
        "Puducherry",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
      ],
      formDetails: {
        s1: {
          name: "",
          dept: "",
          area: "",
          year: "",
        },
        s2: {
          reg: "",
          score: "",
          year: "",
          eligibility: "",
          fname: "",
          mname: "",
          lname: "",
          date: "",
          gender: "",
          blood: "",
          category: "",
          aname: "",
        },
        s3: {
          communication: {
            state: "",
            city: "",
            pincode: "",
            phno: "",
          },
          permanent: {
            state: "",
            city: "",
            pincode: "",
            phno: "",
            mobile: "",
            emergency: "",
            email: "",
            domicile: "",
            motherTongue: "",
            nationality: "",
            pob: "",
            sob: "",
          },
        },
        s4: {
          ug: {
            college: "",
            univ: "",
            yop: "",
            specialization: "",
            cgpa: "",
            thesis: "",
          },
          pg: {
            college: "",
            univ: "",
            yop: "",
            specialization: "",
            cgpa: "",
            thesis: "",
          },
        },
        s5: {
          name: "",
          designation: "",
          yoe: "",
          profDetails: {
            name: [],
            designation: [],
            from: [],
            to: [],
            noy: [],
          },
          publications: {
            names: [],
            title: [],
            jc: [],
            namejc: [],
            doi: [],
            year: [],
          },
          projects: {
            name: [],
            org: [],
            title: [],
            amt: [],
            yos: [],
            duration: [],
          },
          patents: {
            name: [],
            title: [],
            number: [],
            filed: [],
            year: [],
          },
        },
        s6: {
          checkbox: false,
        },
      },
    };
  },
  methods: {
    updateCount(type) {
      switch (type) {
        case 1:
          this.profCount.push(this.profCount.at(-1) + 1);
          break;
        case 2:
          this.publicationCount.push(this.publicationCount.at(-1) + 1);
          break;
        case 3:
          this.projectCount.push(this.projectCount.at(-1) + 1);
          break;
        case 4:
          this.patentCount.push(this.patentCount.at(-1) + 1);
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.stepper {
  margin: 2rem;
  .btn-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 0.5rem;
  }
  ol {
    li {
      margin: 1rem 0;
    }
  }
}
</style>