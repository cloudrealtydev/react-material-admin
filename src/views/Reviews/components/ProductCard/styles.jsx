export default theme => ({
  root: {
    maxWidth: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3
  },
  imageWrapper: {
    width: '64px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  details: {},
  description: {
    lineHeight: '16px',
    height: theme.spacing.unit * 4,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: theme.palette.text.secondary,
    textAlign: 'center',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  stats: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing.unit
  },
  updateIcon: {
    color: theme.palette.text.secondary
  },
  updateText: {
    marginLeft: theme.spacing.unit,
    color: theme.palette.text.secondary
  },
  downloadsIcon: {
    marginLeft: 'auto',
    color: theme.palette.text.secondary
  },
  downloadsText: {
    marginLeft: theme.spacing.unit,
    color: theme.palette.text.secondary
  },
  loginButton: {
    marginTop: theme.spacing.unit * 1,
    width: '100%'
  },
  loginIcon: {
    marginRight: theme.spacing.unit
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
      marginLeft: 'auto',
      width: '100%',
      height: '100%',
      flexShrink: 0,
      flexGrow: 0
  },
});
