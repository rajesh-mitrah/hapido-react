import { Progress } from 'antd';

const ProgressBar = ({ percent = 0, showInfo = true, strokeLinecap = 'round', strokeColor = '#1677FF' }) => {
  return (
    <>
      <Progress percent={percent} strokeLinecap={strokeLinecap} strokeColor={strokeColor} showInfo={showInfo} />
    </>
  );
};

export default ProgressBar;
