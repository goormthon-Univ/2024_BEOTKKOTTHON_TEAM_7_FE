import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SendIcon from "@mui/icons-material/Send";
import MentotiCommentList from "../components/Write/MentotiCommentList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../utils/customAxios";

const DetailMentotiPost = () => {
  const { postId } = useParams();

  const [postData, setPostData] = useState([]); // GET 한 스터디 포스트를 저장할 상태
  const [title, setTitle] = useState("");
  const [isCommited, setIsCommited] = useState(false);

  const getDetailStudy = async () => {
    const response = await api.get(`/study/${postId}`);
    console.log(response);
    setPostData(response.data);
  };

  useEffect(() => {
    getDetailStudy();
  }, []);

  if (!postData) {
    return null;
  }

  const handleInputCommit = (e) => {
    setTitle(e.target.value);
  };

  const handleCommentSubmit = () => {
    setIsCommited(true);
    const commentData = {
      contents: title, // 사용자가 입력한 동적인 값
    };

    api
      .post(`/user/study/${postId}/talk/write`, commentData)
      .then((response) => {
        console.log("댓글이 성공적으로 전송되었습니다.", response.data);
        setIsCommited(false);
      })
      .catch((error) => {
        console.error("댓글 전송에 실패했습니다.", error);
        // 실패 시 처리 로직
      });
    // console.log(commentData);
  };

  const handleLike = async () => {
    try {
      const response = await api.get(`/user/study/${postId}/heart`);
      console.log("좋아요 성공", response.data);

      setPostData((prevData) => ({
        ...prevData,
        heartNum:
          response.data === "하트 누름"
            ? prevData.heartNum + 1
            : response.data === "하트 지움"
            ? prevData.heartNum - 1
            : prevData.heartNum,
      }));
    } catch (error) {
      console.error("좋아요 실패", error);
    }
  };

  return (
    <>
      <PostBlock>
        <PostItem
          key={postId}
          title={postData.title}
          contents={postData.contents}
          writer={postData.writer}
          subject={postData.subject}
          role={postData.role}
          frequency={postData.frequency}
          heartNum={postData.heartNum}
          commentNum={postData.commentNum}
          onLike={handleLike}
        />
      </PostBlock>
      <MentotiCommentList postId={postId} isCommited={isCommited} />
      <CommentContainer>
        <InputContainer>
          <TitleInput
            placeholder="댓글을 입력해주세요."
            onChange={handleInputCommit}
          />
          <CommitButton onClick={handleCommentSubmit}>
            <StyledCommitIcon />
          </CommitButton>
        </InputContainer>
      </CommentContainer>
    </>
  );
};

const PostItem = ({
  title,
  contents,
  writer,
  subject,
  frequency,
  role,
  heartNum,
  commentNum,
  onLike,
}) => {
  return (
    <PostItemBlock>
      <UserInfo>
        <ProfilePic alt="profile" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <UserName>{writer}</UserName>
        </div>
      </UserInfo>
      <h2>{title}</h2>
      <p>{contents}</p>
      <TagList>
        <Tag>{role}</Tag>
        <Tag>{subject}</Tag>
        <Tag>{frequency}</Tag>
      </TagList>
      <PostStats>
        <LikesButton onClick={onLike}>
          <FavoriteIcon
            sx={{
              color: "#929292",
              width: "20px",
              height: "20px",
            }}
          />
        </LikesButton>
        <StatsItem>{heartNum}</StatsItem>
        <ChatBubbleOutlineRoundedIcon
          sx={{
            color: "#929292",
            width: "20px",
            height: "20px",
          }}
        />
        <StatsItem>{commentNum}</StatsItem>
      </PostStats>
    </PostItemBlock>
  );
};

const PostBlock = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  height: 220px;
  font-size: 12px;
`;

const PostItemBlock = styled.div`
  flex-direction: column;
  width: 100%;
  height: 200px;
  padding: 1rem;
  & + & {
    border-top: 3px solid #d9d9d9;
  }
  h2 {
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  p {
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; // 포스트 제목 위에 약간의 여백을 줍니다.
`;

const ProfilePic = styled.img`
  width: 40px; // 프로필 사진의 크기를 지정합니다.
  height: 40px; // 프로필 사진의 크기를 지정합니다.
  border-radius: 50%; // 원형으로 프로필 사진을 표시합니다.
  margin-right: 1rem; // 이름과의 간격을 지정합니다.
`;

const UserName = styled.span`
  color: #000;

  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const TagList = styled.div`
  display: flex; // 태그들을 가로로 나열합니다.
  flex-wrap: wrap; // 태그들이 넘치면 다음 줄로 넘어갑니다.
  margin-top: 1rem; // 본문과 태그 사이의 간격을 지정합니다.
`;

const Tag = styled.div`
  min-width: 60px;
  border-radius: 8px;
  background: #efefef;
  height: 19px;
  flex-shrink: 0;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: black;
`;

/*
const DateInfo = styled.span`
  color: #6e6e6e;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 70px;
`;
*/

const PostStats = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  font-size: 9px;
  color: #666;
`;

const StatsItem = styled.span`
  margin-left: 10px; // 아이템 사이의 간격 조절
  margin-right: 30px; // 아이템 사이의 간격 조절
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const LikesButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #666;
  gap: 5px;
`;

const CommentContainer = styled.div`
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  position: fixed;
  bottom: 20px;
  z-index: 1000;
`;

const TitleInput = styled.input`
  display: flex;
  width: 100%;
  height: 40px;
  padding-left: 15px;
  border-radius: 8px;
  border: 1px solid var(--light-gray-gray-300, #e1e1e8);
  background: var(--light-gray-gray-000, #fff);
`;

const StyledCommitIcon = styled(SendIcon)`
  position: absolute;
  margin-left: 21rem;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  color: #359c3a;
`;

const CommitButton = styled.div`
  display: flex;
  position: absolute;
  width: 21px;
  height: 21px;
  justify-content: space-between;
`;

export default DetailMentotiPost;
