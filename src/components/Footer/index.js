import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { Hidden, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { mangHinh } from "./data";
import applelogo from "../../assets/apple-logo.png";
import androidlogo from "../../assets/android-logo.png";
import fblogo from "../../assets/facebook-logo.png";
import zalologo from "../../assets/zalo-logo.png";
import zionlogo from "../../assets/zion-logo.jpg";
import bctlogo from "../../assets/daThongBao-logo.png";
const Footer = () => {
  const classes = useStyles();
  const renderPartner = () => {
    return mangHinh.map((item) => {
      return (
        <Grid item xs={3} className={classes.footerSpacing}>
          <a
            target="_blank"
            href={item.link}
            className={classes.footerPartnerHover}
          >
            <img
              src={item.linkHing}
              className={classes.footerPartner}
              alt={item.tenHinh}
            />
          </a>
        </Grid>
      );
    });
  };
  return (
    <footer className={classes.root}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12} sm={4} lg={4}>
            <Hidden mdDown>
              <Typography>
                <Typography
                  variant="h6"
                  className={classes.footerTypograhyLabel}
                >
                  TIX
                </Typography>
                <Grid container>
                  <Grid item xs={6}>
                    <a className={classes.footerLink}>FAQ</a>
                  </Grid>
                  <Grid item xs={6}>
                    <a className={classes.footerLink}>Thỏa thuận sử dụng</a>
                  </Grid>
                  <Grid item xs={6}>
                    <a className={classes.footerLink}>Brand Guidelines</a>
                  </Grid>
                  <Grid item xs={6}>
                    <a className={classes.footerLink}>Chính sách bảo mật</a>
                  </Grid>
                </Grid>
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography className={classes.spacingWhenmd} align="center">
                <Grid container>
                  <Grid item xs={6} sm={12}>
                    <a className={classes.footerLink}>Thỏa thuận sử dụng</a>
                  </Grid>
                  <Grid item xs={6} sm={12}>
                    <a className={classes.footerLink}>Chính sách bảo mật</a>
                  </Grid>
                </Grid>
              </Typography>
            </Hidden>
          </Grid>
          <Hidden mdDown>
            <Grid item xs={4}>
              <Typography>
                <Typography
                  variant="subtitle2"
                  className={classes.footerTypograhyLabel}
                >
                  ĐỐI TÁC
                </Typography>
                <Grid container>{renderPartner()}</Grid>
              </Typography>
            </Grid>
          </Hidden>
          <Hidden mdDown>
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>
                    <Typography
                      variant="subtitle2"
                      className={classes.footerTypograhyLabel}
                    >
                      MOBILE APP
                    </Typography>
                    <Grid container>
                      <Grid item xs={3}>
                        <a
                          target="_blank"
                          href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                        >
                          <img
                            src={applelogo}
                            className={classes.footerPartner}
                          />
                        </a>
                      </Grid>
                      <Grid item xs={3}>
                        <a
                          target="_blank"
                          href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                        >
                          <img
                            src={androidlogo}
                            className={classes.footerPartner}
                          />
                        </a>
                      </Grid>
                    </Grid>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    <Typography
                      variant="subtitle2"
                      className={classes.footerTypograhyLabel}
                    >
                      SOCIAL
                    </Typography>
                    <Grid container>
                      <Grid item xs={3}>
                        <a
                          target="_blank"
                          href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                        >
                          <img src={fblogo} className={classes.footerPartner} />
                        </a>
                      </Grid>
                      <Grid item xs={3}>
                        <a
                          target="_blank"
                          href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                        >
                          <img src={zalologo} width="30" />
                        </a>
                      </Grid>
                    </Grid>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={12} sm={5} lg={4} className={classes.spacingWhenmd}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className={classes.alignTextMdD}>
                    <a
                      className={classes.paddingthem}
                      target="_blank"
                      href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                    >
                      <img src={fblogo} className={classes.footerPartner} />
                    </a>
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                    >
                      <img src={zalologo} width="30" />
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>

        <Divider className={classes.divider} />
        <Typography className={classes.footerSpacing}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={3}
              lg={2}
              className={classes.footerSpacingTop}
            >
              <img src={zionlogo} width="100" />
            </Grid>
            <Grid item xs={12} sm={6} lg={8}>
              <Typography variant="h6" className={classes.footerTypograhyLabel}>
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
              </Typography>
              <Typography variant="h6">
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </Typography>
              <Typography variant="h6">
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
              </Typography>
              <Typography variant="h6">
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </Typography>
              <Typography variant="h6">
                Số Điện Thoại (Hotline): 1900 545 436
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              lg={2}
              className={classes.footerSpacingTop}
            >
              <img src={bctlogo} width="100" />
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </footer>
  );
};
export default Footer;
