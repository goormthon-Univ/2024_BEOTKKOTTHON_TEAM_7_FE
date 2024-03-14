import styled from 'styled-components';

export default function Welcome() {
  return (
    <WelcomeWrapper>
      {/* <CharacterImg src={welcomeCharacter} /> */}
      <Content1>반갑습니다!</Content1>
      <Content2>
        <span>스터디메이트 </span>의 회원이 되어
      </Content2>
      <Conten3>어플 속 다양한 해택을 누리세요.</Conten3>
    </WelcomeWrapper>
  );
}

const WelcomeWrapper = styled.div`
  width: 100%;
  height: 130px;
  position: relative;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='406' height='121' fill='none'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%23fff' d='M0 0h406v121H0z'/%3E%3Crect width='522' height='123' x='-19' y='-2' fill='url(%23b)' rx='30'/%3E%3Cg clip-path='url(%23c)'%3E%3Cpath fill='%231D7025' d='M329.081 110.686c24.558 0 44.466-19.95 44.466-44.56 0-24.61-19.908-44.56-44.466-44.56s-44.467 19.95-44.467 44.56c0 24.61 19.909 44.56 44.467 44.56Z'/%3E%3Cpath fill='%23359C3A' d='M325.892 108.727c24.558 0 44.466-19.95 44.466-44.56 0-24.61-19.908-44.561-44.466-44.561s-44.467 19.95-44.467 44.56c0 24.61 19.909 44.561 44.467 44.561Z'/%3E%3Cpath fill='%23359C3A' d='M302.922 116.362c-1.7-.488-3.588-.972-5.121.192-.846.64-1.181 1.816-.642 2.728.523.884 1.533.968 2.447 1.012 5.068.248 10.141.428 15.218.54.455.012.926.016 1.337-.18 1.09-.516 1.126-2.024 1.042-3.228a51.481 51.481 0 0 1 2.902-20.842c.534-1.484 1.149-3.112-.523-4.572-.715-.624-1.609-.996-2.547-1.136-2.989-.456-6.214-.736-9.064.384-2.494.98-4.634 3.256-4.753 5.94'/%3E%3Cpath fill='%23359C3A' d='M310.609 95.132c1.07-.044-.095 2.831-.231 3.291a50.729 50.729 0 0 0-1.181 4.808c-.619 3.276-.807 6.604-.196 9.899.1.532.738.832 1.229.7.555-.152.795-.696.699-1.232-.647-3.491-.248-7.079.551-10.511.403-1.732 1.005-3.408 1.42-5.132.208-.86.248-1.803-.211-2.595-.431-.74-1.205-1.26-2.076-1.224-1.281.052-1.289 2.052-.004 1.996ZM327.025 96.4c.16 6.475.316 12.951.475 19.426.028 1.068.052 2.14.12 3.204.088 1.388 1.217 2.472 2.602 2.56 5.089.316 10.214-.156 15.299-.632.726-.068 1.509-.156 1.924-.908.347-.628.243-1.404-.168-1.992-.695-.996-1.932-1.308-3.097-1.428-.551-.056-1.186-.128-1.481-.596-.152-.24-.176-.532-.196-.816l-1.197-16.847c-.06-.816-.128-1.667-.535-2.375-.539-.932-1.568-1.456-2.566-1.86a23.975 23.975 0 0 0-6.813-1.668c-1.058-.1-2.14-.116-3.157.188-.439.132-.894.352-1.102.76-.156.3-.152.656-.144.992.024 1.124.048 2.248.076 3.371'/%3E%3Cpath fill='%23000' d='M298.923 54.567a2.381 2.381 0 0 0 2.379-2.384 2.381 2.381 0 0 0-2.379-2.384 2.381 2.381 0 0 0-2.379 2.384 2.381 2.381 0 0 0 2.379 2.384ZM320.683 56.335a2.381 2.381 0 0 0 2.379-2.384 2.381 2.381 0 0 0-2.379-2.384 2.381 2.381 0 0 0-2.379 2.384 2.381 2.381 0 0 0 2.379 2.384Z'/%3E%3Cpath stroke='%23000' stroke-miterlimit='10' stroke-width='2' d='M293.77 67.454c8.198 0 14.844-6.66 14.844-14.875s-6.646-14.875-14.844-14.875-14.843 6.66-14.843 14.875 6.645 14.875 14.843 14.875ZM327.041 70.722c8.198 0 14.844-6.66 14.844-14.875s-6.646-14.875-14.844-14.875-14.843 6.66-14.843 14.875 6.645 14.875 14.843 14.875ZM278.875 51.355l-3.804-.28M312.697 53.88l-4.57-.337M347.644 56.599l-6.023-.444'/%3E%3Cpath fill='%23000' d='M336.333 39.408c.2.02-.164-.028.032.004.04.008.076.012.116.02.103.02.211.04.315.068.2.052.391.116.587.188.08.028.04.016-.016-.008l.159.072c.088.04.176.084.26.132.179.1.355.208.523.328.04.028.08.056.119.088a3.345 3.345 0 0 1 .236.2c.152.14.295.288.427.444.032.036.06.076.092.112.06.068-.076-.104.008.012.056.08.116.16.167.24.116.18.22.368.316.564.171.356.702.476 1.025.268.364-.236.451-.648.268-1.028-.862-1.8-2.674-2.984-4.63-3.2-.391-.044-.766.376-.75.752.016.44.327.7.746.744ZM299.837 35.5c.223.009.443.02.666.049.132.016-.095-.016.036.004a7.958 7.958 0 0 1 .463.092c.216.048.431.107.643.18.1.031.2.067.295.103.048.02.096.037.148.056-.088-.035.044.02.072.032.83.377 1.437.809 2.039 1.444.28.292.779.28 1.058 0a.764.764 0 0 0 0-1.06 7.826 7.826 0 0 0-5.416-2.403c-.391-.012-.766.352-.75.752a.76.76 0 0 0 .746.752ZM303.333 70.222c2.283 4.447 9.212 4.82 12.114.864.239-.328.052-.832-.268-1.028-.379-.228-.786-.056-1.025.268-2.283 3.112-7.807 2.492-9.532-.864-.439-.856-1.728-.096-1.289.76ZM311.998 106.347c6.007 2.452 12.629 3.232 19.046 2.324a35.87 35.87 0 0 0 5.421-1.204c.614-.188.351-1.152-.264-.964a35.875 35.875 0 0 1-18.823.54 35.79 35.79 0 0 1-5.112-1.66c-.595-.244-.855.724-.268.964Z'/%3E%3Cpath fill='%23000' d='M317.011 107.243c-.419.132-.499.496-.538.88-.032.328-.064.652-.092.98-.056.656-.1 1.311-.136 1.967-.012.26.24.512.499.5a.51.51 0 0 0 .499-.5c.028-.548.064-1.091.108-1.639.02-.26.044-.524.067-.784l.036-.392c.008-.076.012-.152.024-.228a.25.25 0 0 1 0 .012c.044-.136-.024-.08-.203.168a.51.51 0 0 0 .347-.616c-.068-.256-.355-.428-.611-.348Z'/%3E%3Cpath fill='%23000' d='M313.802 106.819a6.265 6.265 0 0 1 2.423 4.243c.036.316.535.32.499 0a6.8 6.8 0 0 0-2.666-4.675c-.26-.192-.511.24-.256.432Z'/%3E%3Cpath fill='%23000' d='M316.64 109.95c-.028-.611-.056-1.219-.088-1.831-.008-.148-.012-.296-.02-.444-.008-.152-.044-.296-.183-.38-.12-.076-.292-.104-.427-.144-.148-.044-.3-.08-.447-.12-.124-.032-.284.04-.308.176-.063.36.18.612.36.892.171.272.323.556.451.848.115.26.538.076.455-.192-.128-.428-.252-.86-.364-1.292l-.307.308c.112.044.216.104.307.184.104.088.252.1.352 0 .087-.088.103-.264 0-.352a1.813 1.813 0 0 0-.527-.312c-.184-.072-.351.136-.308.308.112.432.232.864.364 1.292l.455-.192a7.078 7.078 0 0 0-.375-.724c-.068-.108-.136-.216-.208-.324-.048-.068-.192-.216-.176-.308l-.307.176c.056.016.738.22.742.208-.048-.092-.063-.1-.051-.02 0 .036.003.068.003.104.004.068.008.14.008.208.004.124.012.244.016.368.024.524.048 1.048.076 1.571.02.312.519.312.507-.008ZM327.289 108.895c.076 1.416.155 2.831.231 4.247.016.32.515.324.499 0-.076-1.416-.156-2.831-.231-4.247-.02-.32-.519-.32-.499 0Z'/%3E%3Cpath fill='%23000' d='M327.987 113.25c.128-1.228.503-2.66 1.573-3.395.527-.36 1.125-.628 1.704-.884.639-.28 1.289-.52 1.952-.732.303-.096.175-.58-.132-.484-.706.224-1.397.484-2.071.78-.663.292-1.349.596-1.92 1.044-1.086.852-1.469 2.359-1.605 3.667-.032.324.467.324.499.004Z'/%3E%3Cpath fill='%23000' d='M327.692 109.115c.16.616.216 1.243.18 1.875.163-.024.327-.044.491-.068-.112-.42-.004-.852.103-1.259.024-.084.04-.172.076-.248.044-.084.12-.144.164-.228a.375.375 0 0 0-.216-.528c-.139-.048-.259.056-.307.176-.056.14-.084.28-.1.428-.02.204.224.288.375.216.14-.068.272-.14.399-.228l-.375-.216c.032.344-.08.668-.327.908.14.08.279.163.415.243.224-.807 1.185-1.007 1.888-1.155l-.192-.456a1.969 1.969 0 0 1-1.381.148.252.252 0 0 0-.315.24.77.77 0 0 0 .084.348c.024.052.064.12.052.176-.012.064-.108.132-.156.172-.08.072-.164.136-.243.212-.32.315-.555.703-.703 1.127-.092.264.343.452.455.192a5.158 5.158 0 0 1 1.477-1.955c.104-.084.088-.264 0-.352-.104-.104-.248-.084-.351 0a5.489 5.489 0 0 0-1.557 2.059l.455.192c.14-.412.395-.768.727-1.043.163-.136.335-.284.379-.508a.66.66 0 0 0-.036-.352c-.032-.084-.088-.168-.084-.26-.104.08-.212.16-.315.24.594.152 1.217.08 1.768-.196.263-.132.072-.512-.192-.456-.898.188-1.959.504-2.239 1.503-.068.244.24.416.415.244.335-.323.515-.795.475-1.259-.016-.176-.203-.328-.375-.216-.128.084-.263.16-.399.228l.375.216a1.05 1.05 0 0 1 .084-.296l-.307.176c.008.004.015.004.023.008-.035-.02-.071-.044-.111-.064-.044-.036.012-.112-.028-.104-.024.004-.076.088-.092.112-.052.076-.088.16-.12.244-.06.176-.104.364-.143.544-.084.387-.12.783-.016 1.171.075.28.475.208.491-.068a6.585 6.585 0 0 0-.2-2.011c-.068-.316-.551-.184-.471.128Z'/%3E%3Cpath fill='%23000' d='M317.271 109.039a41.098 41.098 0 0 0 10.098 1.551c1.285.036 1.285-1.963 0-1.999a38.74 38.74 0 0 1-9.567-1.48c-1.238-.356-1.769 1.576-.531 1.928Z'/%3E%3Cpath fill='%23359C3A' d='M335.97 25.117c5.645 0 10.221-4.586 10.221-10.243S341.615 4.631 335.97 4.631c-5.646 0-10.222 4.586-10.222 10.243s4.576 10.243 10.222 10.243Z'/%3E%3Cpath fill='%23359C3A' d='M348.538 30.093c5.645 0 10.222-4.586 10.222-10.243s-4.577-10.243-10.222-10.243-10.221 4.586-10.221 10.243 4.576 10.243 10.221 10.243Z'/%3E%3Cpath fill='%23359C3A' d='M359.019 37.456c5.645 0 10.222-4.586 10.222-10.243s-4.577-10.243-10.222-10.243-10.221 4.586-10.221 10.243 4.576 10.243 10.221 10.243Z'/%3E%3Ccircle cx='267' cy='103' r='3' fill='%239ED5A2'/%3E%3Ccircle cx='382' cy='83' r='3' fill='%239ED5A2'/%3E%3C/g%3E%3Ccircle cx='239.5' cy='46.5' r='4.5' fill='%239ED5A2'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h406v121H0z'/%3E%3C/clipPath%3E%3CclipPath id='c'%3E%3Cpath fill='%23fff' d='M218-6h168v148H218z'/%3E%3C/clipPath%3E%3ClinearGradient id='b' x1='242' x2='242' y1='-2' y2='121' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23F9F9F9'/%3E%3Cstop offset='1' stop-color='%23D3EBD4' stop-opacity='.75'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")
    center no-repeat;
  background-size: cover;
`;

const Content1 = styled.span`
  top: 30%;
  left: 8%;
  position: absolute;
  color: #161616;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  z-index: 100;
`;

const Content2 = styled.span`
  position: absolute;
  top: 50%;
  left: 8%;
  color: #161616;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  span {
    color: #359c3a;
    font-size: 16px;

    font-weight: 900;
  }
`;
const Conten3 = styled.span`
  position: absolute;
  top: 65%;
  left: 8%;
  color: #161616;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;