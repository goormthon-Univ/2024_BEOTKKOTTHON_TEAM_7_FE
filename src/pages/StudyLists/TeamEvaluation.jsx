import styled from 'styled-components';
import good from '../../assets/svgs/good.svg';
import bad from '../../assets/svgs/bad.svg';
import best from '../../assets/svgs/best.svg';
import { Rating } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../utils/customAxios';

export default function TeamEvalutation() {
  const navigate = useNavigate();
  const { studyId, memberId } = useParams();
  console.log(studyId);
  console.log(memberId);
  const { state } = useLocation();

  const [selectedSticker, setSelectedSticker] = useState(null);

  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');

  const handleChange = (event) => {
    setSelectedSticker(event.target.id);
  };

  const handleSubmit = async () => {
    try {
      const res = await api.post('/user/study/rate', {
        studyId,
        memberId,
        prefer: 1,
        rate: rating,
        message: content,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <E></E>
      <ContentWrapper>
        <Title>{`${state.name}님과 스터디는 어떠셨나요?`}</Title>
        <Subtitle>거래 선호도는 나만 볼 수 있어요.</Subtitle>
        <StickerWrapper>
          <StickerBox
            id="별로에요"
            onClick={handleChange}
            style={{
              backgroundColor:
                selectedSticker === '별로에요' ? '#359C3A' : '#c2c2c2',
            }}
          >
            <img src={bad} alt="bad" id="별로에요" />
          </StickerBox>
          <StickerBox
            id="좋아요"
            onClick={handleChange}
            style={{
              backgroundColor:
                selectedSticker === '좋아요' ? '#359C3A' : '#c2c2c2',
            }}
          >
            <img src={good} alt="good" id="좋아요" />
          </StickerBox>
          <StickerBox
            id="3"
            onClick={handleChange}
            style={{
              backgroundColor:
                selectedSticker === '최고에요' ? '#359C3A' : '#c2c2c2',
            }}
          >
            <img src={best} alt="best" id="최고에요" />
          </StickerBox>
        </StickerWrapper>
        <StickerTitle>
          <StickerSpan
            style={{
              color: selectedSticker === '별로에요' ? '#359C3A' : '#c2c2c2',
            }}
          >
            별로에요
          </StickerSpan>
          <StickerSpan
            style={{
              color: selectedSticker === '좋아요' ? '#359C3A' : '#c2c2c2',
            }}
          >
            좋아요
          </StickerSpan>
          <StickerSpan
            style={{
              color: selectedSticker === '최고에요' ? '#359C3A' : '#c2c2c2',
            }}
          >
            최고에요
          </StickerSpan>
        </StickerTitle>
        <Title style={{ marginBottom: '20px' }}>얼마나 만족하시나요?</Title>
        <Rating
          precision={0.5}
          name="size-large"
          //   defaultValue={5}
          size="large"
          sx={{ marginBottom: '40px' }}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <Title>스터디원에게 평가를 남겨보세요!</Title>
        <Subtitle>남겨주신 평가 메시지는 상대방의 프로필에 공개돼요.</Subtitle>
        <EvaluateBox
          placeholder="내용을 입력해 주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></EvaluateBox>
        <BoxWrapper>
          <SubmmitButton
            style={{ backgroundColor: '#DADADA' }}
            onClick={() => navigate(-1)}
          >
            취소하기
          </SubmmitButton>
          <SubmmitButton onClick={handleSubmit}>등록하기</SubmmitButton>
        </BoxWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const E = styled.div`
  height: 46px;
  width: 100%;
`;
const ContentWrapper = styled.div`
  height: 100dvh;
  width: 100%;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 27px;
`;

const Title = styled.div`
  color: #474747;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 9px;
`;
const Subtitle = styled.div`
  color: #979799;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 29px;
`;

const StickerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const StickerBox = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c2c2c2;
  border-radius: 20px;
  cursor: pointer;
`;

const StickerTitle = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: centers;
  margin-bottom: 42px;
`;
const StickerSpan = styled.span`
  width: 80px;
  text-align: center;
  color: #8a8b8a;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

const EvaluateBox = styled.textarea`
  width: 100%;
  height: 110px;
  border-radius: 10px;
  border: 1px solid #e1e1e8;
  background: #fff;
  padding: 14px;
  margin-bottom: 70px;
`;
const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  width: 100%;
  font-size: 12px;
`;

const SubmmitButton = styled.button`
  height: 47px;
  width: 159px;
  border-radius: 10px;
  border: 1px solid #fff;
  background: #359c3a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
