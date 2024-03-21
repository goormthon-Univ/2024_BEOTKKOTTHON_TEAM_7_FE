import { useLocation } from "react-router-dom";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import AddIcon from "@mui/icons-material/Add";
import CommentList from "../components/Write/CommentList";
import PostCommit from "../components/Write/PostCommit";

const DetailStudyPost = () => {
  const location = useLocation();
  const { post } = location.state; // 전달받은 post 데이터

  return (
    <>
      <PostListBlock>
        <PostItem
          key={post.id}
          title={post.title}
          body={post.body}
          profilePic={post.profilePic}
          userName={post.userName}
          headCountTags={post.headCountTags}
          subjectTags={post.subjectTags}
          chooseDateTags={post.chooseDateTags}
          createdAt={post.createdAt}
          members={post.members}
          likes={post.likes}
          comments={post.comments}
        />
      </PostListBlock>
      <CommentList />
      <PostCommit />
    </>
  );
};

const PostItem = ({
  title,
  body,
  profilePic,
  userName,
  headCountTags,
  subjectTags,
  chooseDateTags,
  createdAt,
  members,
  likes,
  comments,
}) => {
  const displayMembers = members.slice(0, 5); // 최대 5명까지 프로필 사진을 표시

  const handleLikes = () => {
    console.log("좋아요!");
  };
  return (
    <PostItemBlock>
      <UserInfo>
        <ProfilePic src={profilePic} alt="profile" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <UserName>{userName}</UserName>
          <DateInfo>{createdAt}</DateInfo>
        </div>
      </UserInfo>
      <h2>{title}</h2>
      <p>{body}</p>
      <TagList>
        {headCountTags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
        {subjectTags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
        {chooseDateTags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagList>
      <MembersProfiles>
        {displayMembers.map((member) => (
          <ProfileImage key={member.id} src={member.profilePic} alt="profile" />
        ))}
        {members.length < 5 ? <MoreMembers /> : null}
      </MembersProfiles>
      <PostStats>
        <LikesButton onClick={handleLikes}>
          <LikesIcon />
          <StatsItem>{likes}</StatsItem>
        </LikesButton>
        <CommentsStats>
          <CommentsIcon />
          <StatsItem>{comments}</StatsItem>
        </CommentsStats>
      </PostStats>
    </PostItemBlock>
  );
};

const PostListBlock = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  height: 260px;
  margin-top: 30px;
  font-size: 12px;
  flex-direction: column;
`;

const PostItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem;
  &:first-child {
    padding-top: 0;
  }
  h2 {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  p {
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px; // 포스트 제목 위에 약간의 여백을 줍니다.
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
  min-width: 50px;
  border-radius: 8px;
  background: #dff0e0;
  height: 19px;
  flex-shrink: 0;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: black;
`;

const DateInfo = styled.span`
  color: #6e6e6e;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 70px;
`;

const MembersProfiles = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const ProfileImage = styled.img`
  width: 30px; // 원하는 크기로 조절
  height: 30px;
  border-radius: 50%;
  margin-right: 0.5rem; // 프로필 이미지 사이의 간격 조절

  &:last-child {
    margin-right: 0;
  }
`;

const MoreMembers = styled(AddIcon)`
  font-size: 16px;
  color: black;
`;

const PostStats = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  font-size: 13px;
  color: #666;
  margin-top: 13px;
  gap: 5px;
`;

const StatsItem = styled.span`
  margin-left: 3px; // 아이템 사이의 간격 조절
  margin-right: 3px; // 아이템 사이의 간격 조절
  display: flex;
  align-items: center;
`;

const LikesIcon = styled(FavoriteBorderIcon)`
  width: 8px;
  height: 8px;
  color: #b3b3b3;
`;

const LikesButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #666;
  margin-top: 50px;
  gap: 5px;
`;

const CommentsIcon = styled(ChatBubbleOutlineRoundedIcon)`
  width: 8px;
  height: 8px;
  color: #b3b3b3;
`;
const CommentsStats = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #666;
  margin-top: 50px;
  gap: 5px;
`;

export default DetailStudyPost;