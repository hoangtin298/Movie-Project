import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link as ScrollLink } from "react-scroll";
const useStyles = makeStyles((theme) => ({
  root: {},
  col: {
    marginBottom: 20,
  },
  thumbnail: {
    marginBottom: theme.spacing(1),
  },
  thumbnailImg: {
    height: "100%",
    width: "100%",
    borderRadius: "4px",
    transition: "all .2s",
  },
  titleLink: {
    textDecoration: "none",
    fontSize: 24,
    color: theme.palette.common.black,
    transition: "all .2s",

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  title: {
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
    lineHeight: "20px",
    height: "42px",
    fontSize: "16px",
    marginBottom: "5px",
    fontWeight: 500,
  },
  desc: {
    display: "-webkit-box",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",

    textAlign: "justify",
    fontSize: "13px",
    color: "#4a4a4a",
    paddingRight: "5px",
    lineHeight: "19px",

    height: "55px",
    marginBottom: theme.spacing(2),
  },
  thumbnailSmall: {
    height: "50px",
    width: "50px",
    float: "left",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  titleLinkSmall: {
    textDecoration: "none",
    fontSize: 20,
    color: "#4e4e4e",
    transition: "all .2s",

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  titleSmall: {
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
    lineHeight: "20px",
    height: "42px",
    fontSize: "16px",
    marginBottom: "5px",
  },
  wrapButtonSeeMoreNews: {
    marginBottom: theme.spacing(4),
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  buttonSeeMoreNews: {
    fontSize: "14px",
    color: "#949494",
    border: "1px solid #949494",
    borderRadius: "4px",
    padding: theme.spacing(1, 3),
    transition: "all .2s",
    marginTop: theme.spacing(4),
    marginBottom: "35px",
    display: "block",
    "&:hover": {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
  tabs: {
    marginBottom: "20px",
  },
  tab: {
    fontSize: "18px",
    lineHeight: "24px",
    height: "24px",
    textTransform: "unset",
    color: theme.palette.common.black,
    transition: "all .4s",
    "&:hover": {
      fontSize: "22px",
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

const StyledTab = withStyles({
  selected: {
    fontSize: "22px",
  },
})(Tab);

export default function News() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [newsDienAnh, setNewsDienAnh] = useState(null);
  const [newsReview, setNewsReview] = useState(null);
  const [newsKhuyenMai, setNewsKhuyenMai] = useState(null);
  const [newsDienAnhMore, setNewsDienAnhMore] = useState(null);
  const [newsReviewMore, setNewsReviewMore] = useState(null);
  const [newsKhuyenMaiMore, setNewsKhuyenMaiMore] = useState(null);
  const [seeMore, setSeeMore] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    onClickDienAnh();
  }, []);

  const callAxios = (url, setState, boolSeeMore) => {
    return axios({
      url,
      method: "GET",
    })
      .then((result) => {
        setState(result.data);
        setSeeMore(boolSeeMore);
      })
      .catch((error) => console.log(error));
  };

  const onClickReview = () => {
    callAxios(
      "https://60b9f19280400f00177b744b.mockapi.io/ArticlesReview01",
      setNewsReview,
      false
    );
  };

  const onClickDienAnh = () => {
    callAxios(
      `https://60b9f19280400f00177b744b.mockapi.io/Articles01`,
      setNewsDienAnh,
      false
    );
  };

  const onClickKhuyenMai = () => {
    callAxios(
      `https://60b9f19280400f00177b744b.mockapi.io/ArticlesKhuyenMai01`,
      setNewsKhuyenMai,
      false
    );
  };

  const onClickSeeMore = () => {
    console.log(value);
    switch (value) {
      case 0:
        callAxios(
          `https://60b9f19280400f00177b744b.mockapi.io/ArticlesDienAnh02`,
          setNewsDienAnhMore,
          true
        );
        break;
      case 1:
        callAxios(
          `https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesReview02`,
          setNewsReviewMore,
          true
        );
        break;
      case 2:
        callAxios(
          `https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesKhuyenMai02`,
          setNewsKhuyenMaiMore,
          true
        );
      default:
        break;
    }
  };

  const onClickSeeLess = () => {
    setSeeMore(false);
  };

  const renderNews = (newsArr) => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className={classes.thumbnail}>
            <a target="_blank" href={newsArr[0].url}>
              <img
                className={classes.thumbnailImg}
                alt="poster"
                src={newsArr[0].img}
              />
            </a>
          </div>
          <a
            className={classes.titleLink}
            target="_blank"
            href={newsArr[0].url}
          >
            <Typography className={classes.title}>
              {newsArr[0].title}
            </Typography>
          </a>
          <Typography className={classes.desc}>{newsArr[0].text}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.thumbnail}>
            <a target="_blank" href={newsArr[1].url}>
              <img
                className={classes.thumbnailImg}
                alt="poster"
                src={newsArr[1].img}
              />
            </a>
          </div>
          <a
            className={classes.titleLink}
            target="_blank"
            href={newsArr[1].url}
          >
            <Typography className={classes.title}>
              {newsArr[1].title}
            </Typography>
          </a>
          <Typography className={classes.desc}>{newsArr[1].text}</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.thumbnail}>
            <a target="_blank" href={newsArr[2].url}>
              <img
                className={classes.thumbnailImg}
                alt="poster"
                src={newsArr[2].img}
              />
            </a>
          </div>
          <a
            className={classes.titleLink}
            target="_blank"
            href={newsArr[2].url}
          >
            <Typography className={classes.title}>
              {newsArr[2].title}
            </Typography>
          </a>
          <Typography className={classes.desc}>{newsArr[2].text}</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.thumbnail}>
            <a target="_blank" href={newsArr[3].url}>
              <img
                className={classes.thumbnailImg}
                alt="poster"
                src={newsArr[3].img}
              />
            </a>
          </div>
          <a
            className={classes.titleLink}
            target="_blank"
            href={newsArr[3].url}
          >
            <Typography className={classes.title}>
              {newsArr[3].title}
            </Typography>
          </a>
          <Typography className={classes.desc}>{newsArr[3].text}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid item xs={12}>
            <div className={classes.thumbnailSmall}>
              <a target="_blank" href={newsArr[4].url}>
                <img
                  className={classes.thumbnailImg}
                  alt="poster"
                  src={newsArr[4].img}
                />
              </a>
            </div>
            <a
              className={classes.titleLinkSmall}
              target="_blank"
              href={newsArr[4].url}
            >
              <Typography className={classes.titleSmall}>
                {newsArr[4].title}
              </Typography>
            </a>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.thumbnailSmall}>
              <a target="_blank" href={newsArr[5].url}>
                <img
                  className={classes.thumbnailImg}
                  alt="poster"
                  src={newsArr[5].img}
                />
              </a>
            </div>
            <a
              className={classes.titleLinkSmall}
              target="_blank"
              href={newsArr[5].url}
            >
              <Typography className={classes.titleSmall}>
                {newsArr[5].title}
              </Typography>
            </a>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.thumbnailSmall}>
              <a target="_blank" href={newsArr[6].url}>
                <img
                  className={classes.thumbnailImg}
                  alt="poster"
                  src={newsArr[6].img}
                />
              </a>
            </div>
            <a
              className={classes.titleLinkSmall}
              target="_blank"
              href={newsArr[6].url}
            >
              <Typography className={classes.titleSmall}>
                {newsArr[6].title}
              </Typography>
            </a>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.thumbnailSmall}>
              <a target="_blank" href={newsArr[7].url}>
                <img
                  className={classes.thumbnailImg}
                  alt="poster"
                  src={newsArr[7].img}
                />
              </a>
            </div>
            <a
              className={classes.titleLinkSmall}
              target="_blank"
              href={newsArr[7].url}
            >
              <Typography className={classes.titleSmall}>
                {newsArr[7].title}
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <Container component="div" maxWidth="md" id="tinTuc">
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        indicatorColor="primary"
        textColor="primary"
        className={classes.tabs}
      >
        <StyledTab
          onClick={onClickDienAnh}
          className={classes.tab}
          label="Điện Ảnh 24h"
        />
        <StyledTab
          onClick={onClickReview}
          className={classes.tab}
          label="Review"
        />
        <StyledTab
          onClick={onClickKhuyenMai}
          className={classes.tab}
          label="Khuyến mãi"
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        {newsDienAnh && renderNews(newsDienAnh)}
        {seeMore && newsDienAnhMore && renderNews(newsDienAnhMore)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {newsReview && renderNews(newsReview)}
        {seeMore && newsReviewMore && renderNews(newsReviewMore)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {newsKhuyenMai && renderNews(newsKhuyenMai)}
        {seeMore && newsKhuyenMaiMore && renderNews(newsKhuyenMaiMore)}
      </TabPanel>

      <div className={classes.wrapButtonSeeMoreNews}>
        {/* <ScrollLink smooth={true} duration={500} spy={true}> */}
        <Button
          onClick={seeMore ? onClickSeeLess : onClickSeeMore}
          className={classes.buttonSeeMoreNews}
          variant="outlined"
        >
          {seeMore ? "RÚT GỌN" : "XEM THÊM"}
        </Button>
        {/* </ScrollLink> */}
      </div>
    </Container>
  );
}
