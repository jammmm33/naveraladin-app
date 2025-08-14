# 📘 리뷰북 (ReviewBook)

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/) [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

> 알라딘 도서 API와 네이버 블로그 검색 API를 연동하여, 책 검색과 관련 리뷰 조회를 한곳에서 간편하게 해결할 수 있는 웹 애플리케이션입니다.

<br>

## **📜 프로젝트 정보**

-   **프로젝트 기간:** 2025.07.05 ~ 2025.07.07
-   **🔗 배포 링크:** [https://jammmm33.github.io/naveraladin-app](https://jammmm33.github.io/naveraladin-app)

## **✨ 주요 기능**

-   **📚 도서 검색:** 키워드를 입력하면 알라딘 API를 통해 관련 도서 목록(표지, 제목, 저자, 출판사 등)을 실시간으로 조회합니다.
-   **✍️ 블로그 리뷰 검색:** 검색된 도서의 정확한 제목을 입력하면, 네이버 블로그 API를 통해 관련 리뷰 포스트를 즉시 찾아 보여줍니다.
-   **🖥️ 반응형 UI:** 깔끔하고 직관적인 2단 레이아웃을 통해 검색 결과와 리뷰를 한눈에 비교하며 볼 수 있습니다.

## **🛠️ 기술 스택**

### **Frontend**
-   **`React.js`**, **`CSS`**, **`Axios`**
-   **배포:** `GitHub Pages`

### **Backend**
-   **`Node.js`**, **`Express.js`**, **`Axios`**
-   **역할:** 외부 API(알라딘, 네이버) 호출을 위한 프록시 서버 역할, CORS 문제 해결
-   **배포:** `Render`

## **🏛️ 시스템 작동 원리**

1.  **사용자 요청:** React로 구현된 프론트엔드에서 사용자가 책 키워드나 제목을 입력합니다.
2.  **백엔드 API 호출:** 프론트엔드는 Render에 배포된 Node.js 백엔드 서버로 API 요청을 보냅니다.
3.  **외부 API 연동:** 백엔드 서버는 요청에 따라 알라딘 도서 API 또는 네이버 블로그 검색 API를 호출하여 데이터를 가져옵니다. 이 과정에서 민감한 API 키를 안전하게 관리합니다.
4.  **데이터 응답:** 백엔드는 외부 API로부터 받은 데이터를 가공하여 프론트엔드에 전달합니다.
5.  **결과 출력:** 프론트엔드는 전달받은 데이터를 화면에 렌더링하여 사용자에게 보여줍니다.
