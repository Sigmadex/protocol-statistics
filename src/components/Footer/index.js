const currentYear = () => new Date().getFullYear()

const footerStyles = {
  // backgroundColor: '#ffffff',
  backgroundColor: 'gold',
  height: '90px',
  paddingLeft: '36px',
  display: 'flex',
  // alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  bottom: '0px',
  left: '0px',
  right: '0px',
  fontSize: 14
}

const fakeAddress = '154869129'

export function Footer() {

  return (
    <div
      style={{
        backgroundColor: 'gold',
        position: 'fixed',
        // alignItems: 'center',
        padding: '0px 36px 0px 36px',
        display: 'flex',
        justifyContent: 'space-between',
        height: 90,
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <span
        style={{
          backgroundColor: 'skyblue',
          alignContent: 'center'
        }}
      >
        &copy; {currentYear()}
      </span>
      <span
        style={{
          backgroundColor: 'salmon'
        }}
      >
        {fakeAddress}
        <img
          alt='Block icon'
          src='/images/block.svg'
        />
      </span>
    </div>
  )


  return (
    <div
      // class={'footer'}
      style={footerStyles}
    >
      <div>
        &copy; {currentYear()}<a href='https://sigmadex.org/' style={{marginLeft: 5, color: '#404C55', textDecoration: 'none'}}>Sigma Labs</a>
      </div>
      <div>

        {fakeAddress}

        <img
          style={{cursor: 'pointer', height: '21px', width: '24px', marginBottom: 3}}
          alt='Block icon'
          src='/images/block.svg'
        />

      </div>
    </div>
  );
}