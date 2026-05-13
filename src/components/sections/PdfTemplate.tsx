import React from 'react';

export const PdfTemplate = React.forwardRef<HTMLDivElement, { data: any }>(({ data }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: '-9999px',
        top: 0,
        width: '800px',
        minHeight: '1130px',
        backgroundColor: '#0a0a0b',
        color: '#ffffff',
        padding: '60px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ borderBottom: '1px solid #333', paddingBottom: '30px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: '#e63946', fontSize: '32px', margin: 0, letterSpacing: '2px', fontWeight: 300 }}>ARVEX AGENCY</h1>
          <p style={{ color: '#888', fontSize: '14px', margin: '5px 0 0 0', fontWeight: 300 }}>Digital Project Briefing</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '12px', color: '#666', margin: 0, letterSpacing: '1px' }}>DOCUMENT DATE</p>
          <p style={{ fontSize: '14px', margin: '2px 0 0 0' }}>{new Date().toLocaleDateString('en-US')}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
        <div>
          <h3 style={{ fontSize: '12px', color: '#e63946', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Client Data</h3>
          <p style={{ margin: '5px 0', fontSize: '14px' }}><strong style={{ color: '#999' }}>Name:</strong> {data.name || 'Not provided'}</p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}><strong style={{ color: '#999' }}>Email:</strong> {data.email}</p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}><strong style={{ color: '#999' }}>WhatsApp:</strong> {data.whatsappCode} {data.whatsappNumber}</p>
        </div>
        <div>
          <h3 style={{ fontSize: '12px', color: '#e63946', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Client Company</h3>
          <p style={{ margin: '5px 0', fontSize: '14px' }}><strong style={{ color: '#999' }}>Name:</strong> {data.company || 'Not provided'}</p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}><strong style={{ color: '#999' }}>Segment:</strong> {data.segment}</p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}><strong style={{ color: '#999' }}>Current Website:</strong> {data.hasSite === 'sim' ? data.currentSiteUrl || 'Yes, they have' : 'No, they don\'t have'}</p>
        </div>
      </div>

      <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '30px', borderRadius: '8px', marginBottom: '40px' }}>
        <h3 style={{ fontSize: '12px', color: '#e63946', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Service Scope</h3>
        <p style={{ fontSize: '20px', margin: '0 0 15px 0', fontWeight: 300 }}>{data.service}</p>
        <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
          <div>
            <span style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Main Goal</span>
            <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#ddd' }}>{data.goal}</p>
          </div>
          <div>
            <span style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Desired Timeline</span>
            <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#ddd' }}>{data.timeline}</p>
          </div>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '12px', color: '#e63946', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Project Details and References</h3>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.01)', padding: '20px', borderLeft: '2px solid #e63946' }}>
          <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#ccc', whiteSpace: 'pre-wrap', margin: 0 }}>
            {data.message}
          </p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #333', paddingTop: '30px', marginTop: '40px' }}>
        <h3 style={{ fontSize: '12px', color: '#e63946', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Next Steps (Feedback)</h3>
        {data.contactMethod === 'meet' ? (
          <p style={{ fontSize: '14px', margin: 0, color: '#aaa' }}>
            The client requested an alignment meeting via <strong>Google Meet</strong> scheduled for <strong>{data.meetDate} at {data.meetTime}</strong>.
          </p>
        ) : (
          <p style={{ fontSize: '14px', margin: 0, color: '#aaa' }}>
            The client expects an initial contact via <strong>WhatsApp or Email</strong> within 24 hours to send a proposal.
          </p>
        )}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <p style={{ fontSize: '10px', color: '#444', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>
          ARVEXAGENCY.ONLINE • TECHNOLOGY BOUTIQUE
        </p>
      </div>
    </div>
  );
});

PdfTemplate.displayName = 'PdfTemplate';
