import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#222222',
        color: '#f5f7ea',
        width: '100%'
    },
    footerTypograhy: {
        display: 'flex',
        flexDirection: 'column',
    },
    footerTypograhyLabel: {
        fontSize: '12px',
        color: '#fff',
        padding: '20px 0 10px 0'
    },
    footerLink: {
        paddingBottom: '7px',
        fontSize: '12px!important',
        whitespace: 'nowrap',
        color: '#949494',
        textDecoration: 'none!important',
        transition: '0.4s',
        "&:hover": {
            color: '#fff',
        }
    },
    flexExtention: {
        display: 'flex',
        flexDirection: 'column'
    },
    footerLink: {
        paddingBottom: '7px',
        fontSize: '12px!important',
        whitespace: 'nowrap',
        color: '#949494',
        textDecoration: 'none!important',
        transition: '0.4s',
        "&:hover": {
            color: '#fff',
        }
    },
    footerPartner: {
        width: '30px',
        height: '30px',
        borderRadius: '50%'
    },
    footerSpacing: {
        marginBottom: theme.spacing(1)
    },
    footerSpacingTop: {
        marginTop: theme.spacing(3)
    },
    footerPartnerHover: {
        "&:hover": {
            filter: 'grayscale(80%)',
        }
    },
}));
