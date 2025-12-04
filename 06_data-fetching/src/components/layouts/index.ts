
/*
  ## 배럴 패턴 (Barrel Pattern) ##
  1. 여러 컴포넌트, 함수, 클래스 등의 모듈을 하나의 파일에 모아서 재정의(re-export)하는 방법
  2. 여러 모듈을 한 곳에서 import할 수 있음. 각 모듈을 따로따로 import 할 필요 없이
     index.ts 파일만 import함으로써 코드의 가독성이 높아짐
*/

/*
import Header from './Header'
import Footer from './Footer'
import Navigator from './Navigator'

export {Header, Footer, Navigator}
*/

// re-export
export {default as Header} from "./Header"
export {default as Footer} from "./Footer"
export {default as Navigator} from "./Navigator"
