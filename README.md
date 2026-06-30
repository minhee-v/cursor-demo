# cursor-demo

사용자 목록에서 이메일을 추출·검증하는 유틸리티 모듈입니다.

## 사용법

```js
import { getUniqueValidEmails } from './src/email.js';

const users = [
  { email: 'a@b.com' },
  { email: 'invalid' },
  { email: 'a@b.com' },
];

console.log(getUniqueValidEmails(users)); // ['a@b.com']
```

```bash
npm test
```

## 릴리스 노트

### v1.0.0

이메일 유틸리티 모듈 추가 및 Node.js 테스트 환경 구성

#### ✨ 기능

- 사용자 목록에서 이메일 주소 추출 (`extractEmails`)
- RFC 5322 형식 이메일 검증 (`isValidEmail`)
- 유효한 이메일만 필터링 (`getValidEmails`)
- 중복 제거된 유효 이메일 목록 반환 (`getUniqueValidEmails`, 최초 등장 순서 유지)
- `npm test`로 Node.js 내장 테스트 실행 (`src/email.test.js`)

#### 🧹 기타

- ES Modules 기반 프로젝트 초기 설정 (`package.json`, `type: "module"`)
