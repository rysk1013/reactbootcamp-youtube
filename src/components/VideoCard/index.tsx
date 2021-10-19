import { Avatar, Card, CardHeader, CardMedia } from "@material-ui/core";
import { HeaderTitle } from "./HeaderTitle";
import { SubHeaderContent } from "./SubHeaderContent";
import useStyles from "./style";

export const VideoCard = () => {
  // スタイルの作成
  const styles = useStyles();

  return (
    // styles.rootを指定
    <Card className={styles.root} elevation={0} square>

      {/*
        styles.mediaを指定
      */}
      <CardMedia
        className={styles.media}
        image="/static/no-image.jpg"
        title="Thumbnail"
      />

      {/*
        styles.headerを指定
      */}
      <CardHeader
        className={styles.header}
        avatar={<Avatar />}
        title={<HeaderTitle />}
        subheader={<SubHeaderContent />}
      />
    </Card>
  );
};
