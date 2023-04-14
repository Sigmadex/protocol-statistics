const currentYear = () => new Date().getFullYear()

const footerStyles = {
  backgroundColor: '#f7fafc',
  position: 'fixed',
  alignItems: 'center',
  padding: '0px 36px 0px 36px',
  display: 'flex',
  justifyContent: 'space-between',
  height: 90,
  bottom: 0,
  left: 0,
  right: 0
}

const fakeAddress = '154869129'

export function Footer() {
  return (
    <div
      style={footerStyles}
    >
      <span
        style={{
          alignContent: 'center'
        }}
      >
        &copy; {currentYear()}
      </span>
      <span>
        <span style={{marginRight: 15}}>{fakeAddress}</span>
        <img
          alt='Block icon'
          src='/images/block.svg'
        />
      </span>
    </div>
  )
}