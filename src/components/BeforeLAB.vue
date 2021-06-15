<template>
  <v-card class="mx-auto" max-width="1000" min-height="100">
    <br/>
    <p class="display-3 mb-3 text-center">Before Lab</p>
    <p class="title font-regular text-center">ก่อนที่เราจะเริ่มทำแลปที่ 1 เราจะต้องเตรียมโปรแกรมที่ชื่อว่า Cisco Packet Tracer</p>

    <!-- <v-stepper v-model="e1"> -->
    <v-stepper v-model="e1" non-linear value="10">
      <v-stepper-header>
        <!-- <v-stepper-step :complete="e1 > 1" step="1">1</v-stepper-step> -->
        <v-stepper-step complete editable step="1">1</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="2">2</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="3">3</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="4">4</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="5">5</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="6">6</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="7">7</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="8">8</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="9">9</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="10">10</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card-text>
            <p class="title">เข้าเว็บไซส์ (ctrl + คลิกที่ลิงค์ด้านล่าง)
              <v-btn text>
                <a href="https://www.netacad.com/courses/packet-tracer/introduction-packet-tracer">
                  https://www.netacad.com/courses/packet-tracer/introduction-packet-tracer
                </a>
              </v-btn>
            </p>
          </v-card-text>

          <v-btn color="primary" @click="e1 = 2">Next</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card-text>
            <p class="title">กดปุ่ม "Sign up today!"</p>
            <v-img min-width="400" min-height="400" src="@/assets/cisco-page-1.png"></v-img>
          </v-card-text>

          <v-btn color="primary" @click="e1 = 3">Next</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card-text>
            <p class="title">ให้ทำการกรอกข้อมูลตรง "Enroll now" ให้ครบและกดปุ่ม "Submit"</p>
            <v-img min-width="400" min-height="400" src="@/assets/cisco-page-2.png"></v-img>
          </v-card-text>

          <v-btn color="primary" @click="e1 = 4">Next</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="4">
          <v-card-text>
            <p class="title">
              เมื่อเรากดปุ่ม "Submit" ในขั้นตอนที่ 3 ระบบจะแสดงหน้าต่าง
              Registration และกรอก Email ,First name และ Last name
              ให้เราโดยอัตโนมัติ จากนั้นเรากรอกข้อมูลทุกอย่างให้ครบและกดปุ่ม
              "Register"
            </p>
            <v-img
              min-width="400"
              min-height="400"
              src="@/assets/cisco-page-3.png"
            ></v-img>
            <p class="title">
              หากเราสมัครสำเร็จระบบจะแสดงหน้าต่างตามภาพด้านล่างอัตโนมัติ
            </p>
            <v-img
              min-width="400"
              min-height="400"
              src="@/assets/cisco-page-4.png"
            ></v-img>
          </v-card-text>

          <v-btn color="primary" @click="e1 = 5">Next</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="5">
          <v-card-text>
            <p class="title">
              เมื่อสมัครเสร็จแล้ว ระบบจะพาเรามาที่หน้าต่าง Login
            </p>
            <p class="title">
              ให้เราทำการ Login
            </p>
            <v-img
              min-width="400"
              min-height="400"
              src="@/assets/cisco-page-5.png"
            ></v-img>
          </v-card-text>

          <v-btn color="primary" @click="e1 = 6">Next</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="6">
          <v-card-text>
            <p class="title">
              เมื่อ Login เข้ามา ระบบจะให้เรายืนยันที่อยู่ E-mail ของเรา
            </p>
            <v-img
              min-width="400"
              min-height="400"
              src="@/assets/cisco-page-6.png"
            ></v-img>
            <p class="title">
              ให้เราเข้าไปเช็ค Email ที่เราใช้สมัครเพื่เอารหัส Verify
              มาใช้ในการยืนยัน
            </p>
            <v-img
              min-width="400"
              min-height="400"
              src="@/assets/cisco-page-7.png"
            ></v-img>
          </v-card-text>

          <v-btn color="primary" @click="e1 = 7">Next</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="7">
          <v-card-text>
            <p class="title">
              เมื่อเรายืนยันตัวตนสำเร็จระบบจะให้เรา Login อีก 1 ครั้ง
              หลังจากที่เรา Login เสร็จ ระบบจะพาเรามาที่หน้าต่างนี้
              ให้เรากรอกข้อมูลทุกอย่างให้ครบและกดปุ่ม "Create Account"
            </p>
            <v-img
              min-width="400"
              min-height="400"
              src="@/assets/cisco-page-8.png"
            ></v-img>
          </v-card-text>

          <v-btn color="primary" @click="e1 = 8">Next</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="8">
          <v-card-text>
            <p class="title">
              หลังจาก Create Account ระบบจะแสดงหน้าต่างด้านล่างขื้นมา
              ให้เรากดปุ่ม "Launch Course"
            </p>
            <v-img
              min-width="400"
              min-height="400"
              src="@/assets/cisco-page-9.png"
            ></v-img>
            <p class="title">
              หลังจากนั้นระบบจะพาเรามายังหน้าต่างด้านล่าง ให้เรากดไปที่ "Student
              Resource"
            </p>
            <v-img
              min-width="400"
              min-height="400"
              src="@/assets/cisco-page-10.png"
            ></v-img>
          </v-card-text>

          <v-btn color="primary" @click="e1 = 9">Next</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="9">
          <v-card-text>
            <p class="title">
              ระบบจะพาเรามาสู่หน้าต่างนี้
            </p>
            <v-img
              min-width="400"
              min-height="400"
              src="@/assets/cisco-page-11.png"
            ></v-img>
            <p class="title">
              ให้เรากด "Download and install the latest version of Packet
              Tracer"
            </p>
            <v-img
              min-width="400"
              min-height="200"
              src="@/assets/cisco-page-12.png"
            ></v-img>
            <p class="title">
              ให้เรากด "Packet Tracer Resources"
            </p>
            <v-img
              min-width="400"
              min-height="200"
              src="@/assets/cisco-page-13.png"
            ></v-img>
            <p class="title">
              ให้เรากด "PT Desktop"
            </p>
            <v-img
              min-width="400"
              min-height="200"
              src="@/assets/cisco-page-14.png"
            ></v-img>
            <p class="title">
              ดาวน์โหลดไฟล์ตามระบบปฏิบัติการของเครื่องเรา
            </p>
            <v-img
              min-width="400"
              min-height="200"
              src="@/assets/cisco-page-15.png"
            ></v-img>
          </v-card-text>

          <v-btn color="primary" @click="e1 = 10">Next</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="10">
          <v-card-text>
            <p class="title">
              หลังจากดาวน์โหลดไฟล์เสร็จเรียบร้อยให้เราติดตั้งโปรแกรม
            </p>
            <p class="title">
              เมื่อติดตั้งโปรแกรมเสร็จเราก็สามารถเริ่มทำแลปได้ครับ
            </p>
          </v-card-text>

          <v-btn text>Cancel</v-btn>
          <v-btn color="green" @click="toLAB1"
            >LAB1<v-icon>mdi-arrow-right-bold-box</v-icon></v-btn
          >
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
    };
  },
  methods: {
    toLAB1() {
      this.$router.push("/lab1");
    },
  },
};
</script>

<style></style>
