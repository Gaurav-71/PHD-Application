<template>
  <div id="top" class="form-page">
    <h2 class="page-title">Application for Ph.D Admission (Full Time)</h2>
    <v-stepper class="stepper elevation-2" v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 0" step="0">
          Payment Details
        </v-stepper-step>

        <v-divider></v-divider>

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
        <v-stepper-content step="0">
          <v-card class="mb-12 elevation-0" min-height="200px">
            <h2>Transaction Details</h2>
            <v-divider class="my-5"></v-divider>
            <h3>
              <b class="red--text">Note </b>: A fee of Rs.2000 must be paid as
              application fees to the bank account mentioned below. Once paid,
              please enter the transaction ID & date
            </h3>
            <div class="d-flex mt-4">
              <v-text-field
                v-model="formDetails.s0.tid"
                label="Transaction ID"
                :rules="tidRule"
                filled
                class="mr-2"
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s0.date"
                label="Date"
                filled
                type="date"
                class="ml-2"
              ></v-text-field>
            </div>
            <h2>Bank Details for RTGS</h2>
            <v-divider class="my-5"></v-divider>
            <p>
              <b>Account Holder's Name</b> : M.S. Ramaiah Institute of
              Technology
            </p>
            <p><b>Name of the Bank</b> : Karnataka Bank</p>
            <p>
              <b>Name of the Branch</b> : Nehru Nagar Branch, Bangalore - 560020
            </p>
            <p><b>S.B. Account No.</b> : 0632500102466601</p>
            <p><b>IFSC Code</b> : KARB0000063</p>
            <p><b>MICR Code</b> : 560052018</p>
            <p><b>Swift Code</b> : KARBINBBBNG</p>
          </v-card>
          <div class="btn-container">
            <a href="#top">
              <v-btn color="primary" @click="e1 = 1"> Next </v-btn>
            </a>
          </div>
        </v-stepper-content>

        <v-stepper-content step="1">
          <v-card class="mb-12 elevation-0" min-height="200px">
            <v-text-field
              v-model="formDetails.s1.name"
              label="Full Name ( As per Qualifying Exam Marks card )"
              :rules="strRule"
              filled
            ></v-text-field>
            <v-select
              :items="depts"
              v-model="formDetails.s1.dept"
              filled
              label="Department applied for"
            ></v-select>
            <v-text-field
              v-model="formDetails.s1.year"
              label="Ph.D for the year"
              filled
              disabled
            ></v-text-field>
            <v-text-field
              v-model="formDetails.s1.area"
              label="Area of research"
              :rules="strRule"
              filled
            ></v-text-field> </v-card
          ><v-divider class="my-5"></v-divider>
          <div class="btn-container">
            <a href="#top">
              <v-btn class="mr-3" @click="e1 = 0"> Back </v-btn>
            </a>
            <a href="#top">
              <v-btn color="primary" @click="e1 = 2"> Next </v-btn>
            </a>
          </div>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12 elevation-0" min-height="200px">
            <div class="d-flex">
              <v-text-field
                v-model="formDetails.s2.reg"
                label="VTU-ETR Reg. No"
                :rules="requiredRule"
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
                :rules="yearRule"
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
                :rules="strRule"
                filled
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s2.mname"
                label="Middle Name"
                :rules="strRule"
                filled
                class="mx-5"
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s2.lname"
                label="Last Name/Surname/Initials"
                :rules="strRule"
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
              <v-select
                :items="genders"
                v-model="formDetails.s2.gender"
                filled
                label="Gender"
                class="mx-5"
              ></v-select>
              <v-text-field
                v-model="formDetails.s2.blood"
                label="Blood Group"
                :rules="requiredRule"
                filled
              ></v-text-field>
            </div>
            <div class="d-flex">
              <v-text-field
                v-model="formDetails.s2.aname"
                label="Father's/Husband's Name"
                class="mr-2"
                :rules="strRule"
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
            <a href="#top">
              <v-btn class="mr-3" @click="e1 = 1"> Back </v-btn> </a
            ><a href="#top">
              <v-btn color="primary" @click="e1 = 3"> Next </v-btn></a
            >
          </div>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12 elevation-0" min-height="200px">
            <h2>Address for Communication</h2>
            <v-divider class="my-5"></v-divider>
            <div class="d-flex">
              <v-text-field
                v-model="formDetails.s3.communication.addr"
                label="Address"
                filled
                class="mr-5"
                :rules="requiredRule"
              ></v-text-field>
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
                :rules="strRule"
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s3.communication.pincode"
                label="Pincode"
                :rules="pincodeRule"
                filled
              ></v-text-field>
            </div>
            <v-text-field
              v-model="formDetails.s3.communication.phno"
              label="Phone Number"
              :rules="phnoRule"
              filled
            ></v-text-field>
            <h2>Permanent Address</h2>
            <v-divider class="my-5"></v-divider>
            <v-btn @click="copyAddr()" color="primary" class="rounded mb-6"
              >Same as Address for communication</v-btn
            >
            <div class="d-flex">
              <v-text-field
                v-model="formDetails.s3.permanent.addr"
                label="Address"
                filled
                class="mr-5"
                :rules="requiredRule"
              ></v-text-field>
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
                :rules="strRule"
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s3.permanent.pincode"
                label="Pincode"
                :rules="pincodeRule"
                filled
              ></v-text-field>
            </div>
            <div class="d-flex">
              <v-text-field
                v-model="formDetails.s3.permanent.mobile"
                label="Mobile No."
                :rules="phnoRule"
                filled
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s3.permanent.phno"
                label="Phone No."
                class="mx-5"
                :rules="phnoRule"
                filled
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s3.permanent.emergency"
                label="Emergency Contact Number "
                :rules="phnoRule"
                filled
              ></v-text-field>
            </div>
            <div class="d-flex">
              <v-text-field
                v-model="formDetails.s3.permanent.email"
                label="Email ID"
                :rules="emailRule"
                filled
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s3.permanent.domicile"
                label="Domicile"
                class="mx-5"
                filled
                :rules="strRule"
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s3.permanent.motherTongue"
                label="Mother Tongue"
                filled
                :rules="strRule"
              ></v-text-field>
            </div>
            <div class="d-flex">
              <v-text-field
                v-model="formDetails.s3.permanent.pob"
                label="Place of birth"
                filled
                :rules="requiredRule"
              ></v-text-field>
              <v-select
                :items="states"
                v-model="formDetails.s3.permanent.sob"
                filled
                label="State of Birth"
                class="mx-5"
              ></v-select>
              <v-text-field
                v-model="formDetails.s3.permanent.nationality"
                label="Nationality"
                filled
                :rules="strRule"
              ></v-text-field>
            </div>
          </v-card>
          <v-divider class="my-5"></v-divider>
          <div class="btn-container">
            <a href="#top">
              <v-btn class="mr-3" @click="e1 = 2"> Back </v-btn></a
            ><a href="#top">
              <v-btn color="primary" @click="e1 = 4"> Next </v-btn></a
            >
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
                :rules="strRule"
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s4.ug.univ"
                label="University"
                class="mx-5"
                filled
                :rules="strRule"
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s4.ug.yop"
                label="Year of Passing"
                filled
                :rules="yearRule"
              ></v-text-field>
            </div>
            <div class="d-flex">
              <v-text-field
                v-model="formDetails.s4.ug.specialization"
                label="Specialization"
                filled
                :rules="strRule"
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s4.ug.cgpa"
                label="Percentage/CGPA"
                filled
                class="mx-5"
                :rules="scoreRule"
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s4.ug.thesis"
                label="Title of UG Thesis"
                filled
                :rules="requiredRule"
              ></v-text-field>
            </div>
            <h2>PG Details</h2>
            <v-divider class="my-5"></v-divider>
            <div class="d-flex">
              <v-text-field
                v-model="formDetails.s4.pg.college"
                label="College"
                filled
                :rules="strRule"
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s4.pg.univ"
                label="University"
                class="mx-5"
                filled
                :rules="strRule"
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s4.pg.yop"
                label="Year of Passing"
                filled
                :rules="yearRule"
              ></v-text-field>
            </div>
            <div class="d-flex">
              <v-text-field
                v-model="formDetails.s4.pg.specialization"
                label="Specialization"
                filled
                :rules="strRule"
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s4.pg.cgpa"
                label="Percentage/CGPA"
                filled
                class="mx-5"
                :rules="scoreRule"
              ></v-text-field>
              <v-text-field
                v-model="formDetails.s4.pg.thesis"
                label="Title of PG Thesis"
                filled
                :rules="requiredRule"
              ></v-text-field>
            </div>
          </v-card>
          <v-divider class="my-5"></v-divider>
          <div class="btn-container">
            <a href="#top">
              <v-btn class="mr-3" @click="e1 = 3"> Back </v-btn></a
            ><a href="#top">
              <v-btn color="primary" @click="e1 = 5"> Next </v-btn></a
            >
          </div>
        </v-stepper-content>

        <v-stepper-content step="5">
          <v-card class="mb-12 elevation-0" min-height="200px">
            <h2>Details of Employment ( if applicable )</h2>
            <h2 class="mt-5">
              Professional details in reverse chronological order
            </h2>
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
                    :rules="strRule"
                  ></v-text-field>
                  <v-text-field
                    v-model="formDetails.s5.profDetails.designation[index]"
                    label="Designation"
                    filled
                    class="mr-5"
                    :rules="strRule"
                  ></v-text-field>
                  <v-text-field
                    v-model="formDetails.s5.profDetails.from[index]"
                    label="From"
                    filled
                    class="mr-5"
                    :rules="requiredRule"
                  ></v-text-field>
                  <v-text-field
                    v-model="formDetails.s5.profDetails.to[index]"
                    label="To"
                    filled
                    class="mr-5"
                    :rules="requiredRule"
                  ></v-text-field>
                  <v-text-field
                    v-model="formDetails.s5.profDetails.noy[index]"
                    label="No. of years"
                    filled
                    :rules="numberRule"
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
                    :rules="strRule"
                  ></v-text-field>
                  <v-text-field
                    v-model="formDetails.s5.publications.title[index]"
                    label="Title of Paper"
                    filled
                    class="mr-5"
                    :rules="requiredRule"
                  ></v-text-field>
                  <v-select
                    :items="type"
                    v-model="formDetails.s5.publications.jc[index]"
                    filled
                    label="Journal/Conference"
                    class="mr-5"
                  ></v-select>
                  <v-text-field
                    v-model="formDetails.s5.publications.namejc[index]"
                    :label="
                      formDetails.s5.publications.jc[index]
                        ? 'Name of ' + formDetails.s5.publications.jc[index]
                        : 'Name'
                    "
                    filled
                    class="mr-5"
                    :rules="requiredRule"
                  ></v-text-field>
                  <v-text-field
                    v-model="formDetails.s5.publications.doi[index]"
                    label="Vol issue, DOI"
                    filled
                    class="mr-5"
                    :rules="requiredRule"
                  ></v-text-field>
                  <v-text-field
                    v-model="formDetails.s5.publications.year[index]"
                    label="Year"
                    filled
                    :rules="yearRule"
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
                    :rules="strRule"
                  ></v-text-field>
                  <v-text-field
                    v-model="formDetails.s5.projects.org[index]"
                    label="Name of the Organization"
                    filled
                    class="mr-5"
                    :rules="strRule"
                  ></v-text-field>
                  <v-text-field
                    v-model="formDetails.s5.projects.title[index]"
                    label="Title of Project"
                    filled
                    class="mr-5"
                    :rules="requiredRule"
                  ></v-text-field>
                  <v-text-field
                    v-model="formDetails.s5.projects.amt[index]"
                    label="Amount Sanctioned"
                    filled
                    class="mr-5"
                    :rules="requiredRule"
                  ></v-text-field>
                  <v-text-field
                    v-model="formDetails.s5.projects.yos[index]"
                    label="Year of Sanction"
                    filled
                    class="mr-5"
                    :rules="yearRule"
                  ></v-text-field>
                  <v-text-field
                    v-model="formDetails.s5.projects.duration[index]"
                    label="Duration"
                    filled
                    :rules="requiredRule"
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
                    :rules="strRule"
                  ></v-text-field>
                  <v-text-field
                    v-model="formDetails.s5.patents.title[index]"
                    label="Title of Patent"
                    filled
                    class="mr-5"
                    :rules="requiredRule"
                  ></v-text-field>
                  <v-text-field
                    v-model="formDetails.s5.patents.number[index]"
                    label="Number"
                    filled
                    class="mr-5"
                    :rules="numberRule"
                  ></v-text-field>
                  <v-select
                    :items="patentStatus"
                    v-model="formDetails.s5.patents.filed[index]"
                    filled
                    label="Filed/Published/Granted"
                    class="mr-5"
                  ></v-select>
                  <v-text-field
                    v-model="formDetails.s5.patents.year[index]"
                    label="Year"
                    filled
                    class="mr-5"
                    :rules="yearRule"
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
            <a href="#top">
              <v-btn class="mr-3" @click="e1 = 4"> Back </v-btn></a
            ><a href="#top">
              <v-btn color="primary" @click="e1 = 6"> Next </v-btn></a
            >
          </div>
        </v-stepper-content>

        <v-stepper-content step="6">
          <v-card class="mb-12 elevation-0" min-height="200px">
            <h2>Documents to be attached with application form :-</h2>
            <v-divider class="my-5"></v-divider>
            <table class="doc-table">
              <tr>
                <th>Sl. No.</th>
                <th>Documents</th>
                <th>Yes / No</th>
              </tr>
              <tr>
                <td>1.</td>
                <td class="point">
                  10th Standard marks card as proof for the date of birth
                  (Attested)
                </td>
                <td>
                  <v-select
                    :items="docStatus"
                    v-model="formDetails.s6.b1"
                    label="Yes/No"
                    class="mx-4"
                  ></v-select>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td class="point">
                  Marks cards and Degree Certificate of Under Graduate
                  (Attested)
                </td>
                <td>
                  <v-select
                    :items="docStatus"
                    v-model="formDetails.s6.b2"
                    label="Yes/No"
                    class="mx-4"
                  ></v-select>
                </td>
              </tr>

              <tr>
                <td>3.</td>
                <td class="point">
                  Marks cards and Degree Certificate of Post Graduate (Attested)
                </td>
                <td>
                  <v-select
                    :items="docStatus"
                    v-model="formDetails.s6.b3"
                    label="Yes/No"
                    class="mx-4"
                  ></v-select>
                </td>
              </tr>

              <tr>
                <td>4.</td>
                <td class="point">Valid competitive examination certificate</td>
                <td>
                  <v-select
                    :items="docStatus"
                    v-model="formDetails.s6.b4"
                    label="Yes/No"
                    class="mx-4"
                  ></v-select>
                </td>
              </tr>

              <tr>
                <td>5.</td>
                <td class="point">
                  Migration Certificate, if from outside Karnataka state
                </td>
                <td>
                  <v-select
                    :items="docStatus"
                    v-model="formDetails.s6.b5"
                    label="Yes/No"
                    class="mx-4"
                  ></v-select>
                </td>
              </tr>

              <tr>
                <td>6.</td>
                <td class="point">Payment receipt of application fee</td>
                <td>
                  <v-select
                    :items="docStatus"
                    v-model="formDetails.s6.b6"
                    label="Yes/No"
                    class="mx-4"
                  ></v-select>
                </td>
              </tr>

              <tr>
                <td>7.</td>
                <td class="point">Aadhaar card</td>
                <td>
                  <v-select
                    :items="docStatus"
                    v-model="formDetails.s6.b7"
                    label="Yes/No"
                    class="mx-4"
                  ></v-select>
                </td>
              </tr>

              <tr>
                <td>8.</td>
                <td class="point">
                  No Objection Certificate from the institute/organization, if
                  applicable
                </td>
                <td>
                  <v-select
                    :items="docStatus"
                    v-model="formDetails.s6.b8"
                    label="Yes/No"
                    class="mx-4"
                  ></v-select>
                </td>
              </tr>

              <tr>
                <td>9.</td>
                <td class="point">
                  Abstract of Research Problem (maximum of 1000 words)
                </td>
                <td>
                  <v-select
                    :items="docStatus"
                    v-model="formDetails.s6.b9"
                    label="Yes/No"
                    class="mx-4"
                  ></v-select>
                </td>
              </tr>
            </table>

            <h2 class="mt-8">Declaration By The Candidate</h2>
            <v-divider class="my-5"></v-divider>
            <ol>
              <li>
                I declare that particulars and information furnished are fully
                correct.
              </li>
              <li>
                If there is any false information/fake certificate or any
                forgery in the particulars / certificates / documents submitted
                by me to the authorities of RIT /University, my admission may at
                once be cancelled and necessary action may be taken.
              </li>
              <li>
                I do understand that, my admission at RIT is provisional and
                subject to approval of the VTU, Belagavi.
              </li>
              <li>
                I Promise to abide by the rules and regulations of the
                Institution and the University, and I can be subjected to
                disciplinary action, if need arises, and also I can be dismissed
                from the college, if I am found not obeying the rules and
                regulations
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
            <a href="#top">
              <v-btn class="mr-3" @click="e1 = 5"> Back </v-btn></a
            >
            <v-btn
              :disabled="!formDetails.s6.checkbox"
              @click="prtScreen()"
              color="primary"
            >
              Print
            </v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <div class="output">
      <Header />
      <div class="page p1">
        <h3>APPLICATION FOR Ph.D ADMISSION (FULL TIME) 2021-2022</h3>
        <div class="name">
          <div class="bottom">
            <b> Full Name Of Applicant </b> :
            <span> {{ formDetails.s1.name }}</span>
          </div>
          <div class="top">Affix Recent Passport Photograph</div>
        </div>
        <div class="d-flex justify-space-between mt-2">
          <p><b>Department applied for</b> : {{ formDetails.s1.dept }}</p>
          <p><b>Ph.D for the year</b> : {{ formDetails.s1.year }}</p>
        </div>
        <p><b>Area of Research </b> : {{ formDetails.s1.area }}</p>
        <div class="d-flex justify-center mt-2">
          <p><b> 'A' ADMISSION FORM</b></p>
        </div>
        <div class="d-flex justify-space-between mt-2">
          <p><b>VTU-ETR Reg. No</b> : {{ formDetails.s2.reg }}</p>
          <p><b>Score</b> : {{ formDetails.s2.score }}</p>
          <p><b>Year of VTU-ETR</b> : {{ formDetails.s2.year }}</p>
        </div>
        <div class="d-flex justify-space-between mt-2">
          <p>
            <b>Any other eligibility criterion </b> :
            {{ formDetails.s2.eligibility }}
          </p>
        </div>
        <div class="d-flex justify-space-between mt-2">
          <p><b>First Name </b> : {{ formDetails.s2.fname }}</p>
          <p><b>Middle Name </b> : {{ formDetails.s2.mname }}</p>
          <p><b>Last Name/Surname/Initial </b> : {{ formDetails.s2.lname }}</p>
        </div>
        <div class="d-flex justify-space-between mt-2">
          <p><b>Date of Birth</b> : {{ formDetails.s2.date }}</p>
          <p><b>Gender</b> : {{ formDetails.s2.gender }}</p>
          <p><b>Blood Group</b> : {{ formDetails.s2.blood }}</p>
        </div>
        <div class="d-flex justify-space-between">
          <p><b>Father’s/Husband’s Name</b> : {{ formDetails.s2.aname }}</p>
          <p><b>Category</b> : {{ formDetails.s2.category }}</p>
        </div>
        <p><b>Address for Communication :-</b></p>
        <div class="d-flex justify-space-between">
          {{ formDetails.s3.communication.addr }},
          {{ formDetails.s3.communication.city }},
          {{ formDetails.s3.communication.state }},
          {{ formDetails.s3.communication.pincode }}
        </div>
        <p><b>Phone Number</b> : {{ formDetails.s3.communication.phno }}</p>
        <p><b>Permanent Address :-</b></p>
        <div class="d-flex justify-space-between">
          {{ formDetails.s3.permanent.addr }},
          {{ formDetails.s3.permanent.city }},
          {{ formDetails.s3.permanent.state }},
          {{ formDetails.s3.permanent.pincode }}
        </div>
        <div class="d-flex justify-space-between">
          <p><b>Phone No.</b> : {{ formDetails.s3.permanent.phno }}</p>
          <p><b>Mobile No.</b> : {{ formDetails.s3.permanent.mobile }}</p>
          <p>
            <b>Emergency No.</b> :
            {{ formDetails.s3.permanent.emergency }}
          </p>
        </div>
        <div class="d-flex justify-space-between">
          <p><b>Email</b>: {{ formDetails.s3.permanent.email }}</p>
          <p><b>Nationality</b>: {{ formDetails.s3.permanent.nationality }}</p>
          <p>
            <b>Mother Tongue</b>: {{ formDetails.s3.permanent.motherTongue }}
          </p>
        </div>
        <div class="d-flex justify-space-between">
          <p><b>Domicile</b>: {{ formDetails.s3.permanent.domicile }}</p>
          <p><b>Place of Birth</b>: {{ formDetails.s3.permanent.pob }}</p>
          <p><b>State of Birth</b>: {{ formDetails.s3.permanent.sob }}</p>
        </div>
      </div>
      <Header />
      <div class="page p2">
        <div class="d-flex justify-center mt-6">
          <p><b>'B' ACADEMIC DETAILS</b></p>
        </div>
        <table>
          <tr>
            <th>Sl No.</th>
            <th>Degree</th>
            <th>Year of passing</th>
            <th>College</th>
            <th>University</th>
            <th>Specialization</th>
            <th>Percentage/CGPA</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>UG</td>
            <td>{{ formDetails.s4.ug.yop }}</td>
            <td>{{ formDetails.s4.ug.college }}</td>
            <td>{{ formDetails.s4.ug.univ }}</td>
            <td>{{ formDetails.s4.ug.specialization }}</td>
            <td>{{ formDetails.s4.ug.cgpa }}</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>PG</td>
            <td>{{ formDetails.s4.pg.yop }}</td>
            <td>{{ formDetails.s4.pg.college }}</td>
            <td>{{ formDetails.s4.pg.univ }}</td>
            <td>{{ formDetails.s4.pg.specialization }}</td>
            <td>{{ formDetails.s4.pg.cgpa }}</td>
          </tr>
        </table>
        <table class="mt-10">
          <tr>
            <th>Title of UG Thesis</th>
            <td>{{ formDetails.s4.ug.thesis }}</td>
          </tr>
          <tr>
            <th>Title of PG Thesis</th>
            <td>{{ formDetails.s4.pg.thesis }}</td>
          </tr>
        </table>
        <div class="d-flex justify-center mt-6">
          <p><b>'C' PROFESSIONAL DETAILS</b></p>
        </div>
        <p><b>1. Professional details in reverse chronological order </b> :-</p>
        <table>
          <tr>
            <th>Sl. No.</th>
            <th>Name of the Institute/Organization</th>
            <th>Designation</th>
            <th>From</th>
            <th>To</th>
            <th>No. of years</th>
          </tr>
          <tr v-for="(i, index) in profCount" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ formDetails.s5.profDetails.name[index] }}</td>
            <td>{{ formDetails.s5.profDetails.designation[index] }}</td>
            <td>{{ formDetails.s5.profDetails.from[index] }}</td>
            <td>{{ formDetails.s5.profDetails.to[index] }}</td>
            <td>{{ formDetails.s5.profDetails.noy[index] }}</td>
          </tr>
        </table>
      </div>
      <Header />
      <div class="page p4">
        <p class="mt-4"><b>2. Details of Publications in last 3 years</b>:-</p>
        <table>
          <tr>
            <th>Sl. No.</th>
            <th>Name of Authors</th>
            <th>Title of Paper</th>
            <th>Journal / conference</th>
            <th>Name of Journal / conference</th>
            <th>Vol. issue, DOI</th>
            <th>Year</th>
          </tr>
          <tr v-for="(i, index) in publicationCount" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ formDetails.s5.publications.names[index] }}</td>
            <td>{{ formDetails.s5.publications.title[index] }}</td>
            <td>{{ formDetails.s5.publications.jc[index] }}</td>
            <td>{{ formDetails.s5.publications.namejc[index] }}</td>
            <td>{{ formDetails.s5.publications.doi[index] }}</td>
            <td>{{ formDetails.s5.publications.year[index] }}</td>
          </tr>
        </table>
        <p class="mt-4"><b>3. Details of Funded/Consultancy Projects</b>:-</p>
        <table>
          <tr>
            <th>Sl. No.</th>
            <th>Name of Investigator/s</th>
            <th>Name of the Organization</th>
            <th>Title of Project</th>
            <th>Amount Sanctioned</th>
            <th>Year of Sanction</th>
            <th>Duration</th>
          </tr>
          <tr v-for="(i, index) in projectCount" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ formDetails.s5.projects.name[index] }}</td>
            <td>{{ formDetails.s5.projects.org[index] }}</td>
            <td>{{ formDetails.s5.projects.title[index] }}</td>
            <td>{{ formDetails.s5.projects.amt[index] }}</td>
            <td>{{ formDetails.s5.projects.yos[index] }}</td>
            <td>{{ formDetails.s5.projects.duration[index] }}</td>
          </tr>
        </table>
        <p class="mt-4"><b>4. Patents if any</b>:-</p>
        <table>
          <tr>
            <th>Sl. No.</th>
            <th>Name of Investigator/s</th>
            <th>Title of Patent</th>
            <th>Number</th>
            <th>Filed/Published/Granted</th>
            <th>Year</th>
          </tr>
          <tr v-for="(i, index) in patentCount" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ formDetails.s5.patents.name[index] }}</td>
            <td>{{ formDetails.s5.patents.title[index] }}</td>
            <td>{{ formDetails.s5.patents.number[index] }}</td>
            <td>{{ formDetails.s5.patents.filed[index] }}</td>
            <td>{{ formDetails.s5.patents.year[index] }}</td>
          </tr>
        </table>
        <p class="mt-4"><b>5. Application Fee Payment Details</b>:-</p>
        <table>
          <tr>
            <th>Transaction ID</th>
            <th>Transaction Date</th>
          </tr>
          <tr>
            <td>{{ formDetails.s0.tid }}</td>
            <td>{{ formDetails.s0.date }}</td>
          </tr>
        </table>
      </div>
      <Header />
      <div class="page p3">
        <div class="d-flex justify-center mt-6">
          <p><b>Declaration By The Candidate</b></p>
        </div>
        <ol>
          <li>
            I declare that particulars and information furnished are fully
            correct.
          </li>
          <li>
            If there is any false information/fake certificate or any forgery in
            the particulars / certificates / documents submitted by me to the
            authorities of RIT /University, my admission may at once be
            cancelled and necessary action may be taken.
          </li>
          <li>
            I do understand that, my admission at RIT is provisional and subject
            to approval of the VTU, Belagavi.
          </li>
          <li>
            I Promise to abide by the rules and regulations of the Institution
            and the University, and I can be subjected to disciplinary action,
            if need arises, and also I can be dismissed from the college, if I
            am found not obeying the rules and regulations
          </li>
          <li>
            I agree to adhere to Rules and Regulations, Scheme of study and
            Examinations of the Autonomous Institute, affiliated to Visvesvaraya
            Technological University, Belagavi.
          </li>
        </ol>
        <div class="d-flex justify-space-between mt-15">
          <p><b>Date</b> :</p>
          <p><b>Signature of the Candidate</b></p>
        </div>
        <p><b>Place</b> :</p>
        <p class="mt-5">
          <b>Documents to be attached with application form</b> :-
        </p>
        <table>
          <tr>
            <th>Sl. No.</th>
            <th>Documents</th>
            <th>Yes / No</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>
              10th Standard marks card as proof for the date of birth (Attested)
            </td>
            <td>{{ formDetails.s6.b1 }}</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>
              Marks cards and Degree Certificate of Under Graduate (Attested)
            </td>
            <td>{{ formDetails.s6.b2 }}</td>
          </tr>

          <tr>
            <td>3.</td>
            <td>
              Marks cards and Degree Certificate of Post Graduate (Attested)
            </td>
            <td>{{ formDetails.s6.b3 }}</td>
          </tr>

          <tr>
            <td>4.</td>
            <td>Valid competitive examination certificate</td>
            <td>{{ formDetails.s6.b4 }}</td>
          </tr>

          <tr>
            <td>5.</td>
            <td>Migration Certificate, if from outside Karnataka state</td>
            <td>{{ formDetails.s6.b5 }}</td>
          </tr>

          <tr>
            <td>6.</td>
            <td>Payment receipt of application fee</td>
            <td>{{ formDetails.s6.b6 }}</td>
          </tr>

          <tr>
            <td>7.</td>
            <td>Aadhaar card</td>
            <td>{{ formDetails.s6.b7 }}</td>
          </tr>

          <tr>
            <td>8.</td>
            <td>
              No Objection Certificate from the institute/organization, if
              applicable
            </td>
            <td>{{ formDetails.s6.b8 }}</td>
          </tr>

          <tr>
            <td>9.</td>
            <td>Abstract of Research Problem (maximum of 1000 words)</td>
            <td>{{ formDetails.s6.b9 }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      e1: 0,
      profCount: [0],
      publicationCount: [0],
      projectCount: [0],
      patentCount: [0],
      eligibility: ["UGC_NET", "UGC_CSIR_NET", "SLET", "GATE", "CAT"],
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
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
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
      genders: ["Male", "Female"],
      type: ["Journal", "Conference"],
      patentStatus: ["Filed", "Granted", "Published"],
      depts: [
        "Biotechnology",
        "Chemical Engineering",
        "Chemistry",
        "Civil Engineering",
        "Computer Science & Engineering",
        "Electronics & Communication Engineering",
        "Electrical & Electronics Engineering",
        "Electronics & Telecommunication Engineering",
        "Industrial Engineering & Management",
        "Information Science & Engineering",
        "Mathematics",
        "Master of Computer Applications(MCA)",
        "Management Studies(MBA)",
        "Mechanical Engineering",
        "Medical Electronics",
        "Physics",
      ],
      docStatus: ["Yes", "No"],
      formDetails: {
        s0: {
          tid: "",
          date: "",
        },
        s1: {
          name: "",
          dept: "",
          area: "",
          year: "2021-22",
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
            addr: "",
            state: "",
            city: "",
            pincode: "",
            phno: "",
          },
          permanent: {
            addr: "",
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
          b1: "",
          b2: "",
          b3: "",
          b4: "",
          b5: "",
          b6: "",
          b7: "",
          b8: "",
          b9: "",
        },
      },
      tidRule: [
        (v) => !!v || "This field is required",
        (v) => !!v || "Transaction ID is required",
      ],
      yearRule: [
        (v) => !!v || "Year is required",
        (v) => /^\d+$/.test(v) || "Characters not allowed",
        (v) => (v && v.length <= 4) || "Invalid year",
        (v) => (v >= 1930 && v <= 2050) || "Invalid year",
      ],
      pincodeRule: [
        (v) => !!v || "Pincode is required",
        (v) => /^\d+$/.test(v) || "Characters not allowed",
        (v) => (v && v.length == 6) || "Invalid pincode",
      ],
      phnoRule: [
        (v) => !!v || "This field is required",
        (v) => /^\d+$/.test(v) || "Characters not allowed",
        (v) => (v && v.length <= 12) || "Invalid  Number",
      ],
      emailRule: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      strRule: [
        (v) => !!v || "This field is required",
        (v) => !/\d/.test(v) || "Numbers not allowed",
      ],
      requiredRule: [(v) => !!v || "This field is required"],
      scoreRule: [
        (v) => !!v || "This field is required",
        (v) => (v >= 0 && v <= 100) || "Invalid score",
      ],
      numberRule: [
        (v) => !!v || "This field is required",
        (v) => /^\d+$/.test(v) || "Characters not allowed",
      ],
    };
  },
  methods: {
    prtScreen() {
      window.print();
    },
    copyAddr() {
      this.formDetails.s3.permanent.addr =
        this.formDetails.s3.communication.addr;
      this.formDetails.s3.permanent.state =
        this.formDetails.s3.communication.state;
      this.formDetails.s3.permanent.city =
        this.formDetails.s3.communication.city;
      this.formDetails.s3.permanent.pincode =
        this.formDetails.s3.communication.pincode;
    },
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
.form-page {
  width: 100%;
  .page-title {
    margin: 2rem 2rem 1.5rem 2.2rem;
    display: block;
  }
  .stepper {
    margin: 2rem;
    margin-top: 0;
    display: block;
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
  .output {
    display: none;
    .divider {
      //margin: 0.5rem 0;
      height: 0.5px;
      width: 100%;
      background: #000;
    }
    .table-break {
      page-break-after: always;
    }
    .page {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 2rem;
      page-break-after: always;
    }
    .p1 {
      h3 {
        width: 100%;
        text-align: center;
        margin: 1rem 0 0.5rem 0;
      }
      .name {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
        .top {
          width: 125px;
          height: 150px;
          border: 1px solid black;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .bottom {
          margin-top: 1rem;
          span {
            text-transform: uppercase;
          }
        }
      }
    }
    table,
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    td,
    th {
      text-align: center;
      padding: 0.25rem;
    }
    .p3 {
      ol {
        li {
          text-align: justify;
          margin: 0.25rem 0;
        }
      }
      td {
        text-align: left;
      }
    }
  }
  .doc-table {
    border: 1px solid black;
    border-collapse: collapse;
  }
  .doc-table {
    width: 100%;
    td,
    th {
      text-align: center;
      padding: 0.25rem;
      border: 1px solid black;
      border-collapse: collapse;
    }
    .point {
      text-align: left;
      padding-left: 0.8rem;
    }
  }
}

@media print {
  @page {
    size: A4 portrait; /* auto is default portrait; */
    padding: 2rem 1rem;
  }
  .stepper,
  .page-title {
    display: none !important;
    margin: 0;
    padding: 0;
  }
  .output {
    display: block !important;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
  }
}
</style>