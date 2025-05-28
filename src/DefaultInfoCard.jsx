import { Card, CardContent, Typography, Box } from "@mui/material";
import PropTypes from 'prop-types';

const DefaultInfoCard = ({ icon: IconComponent, title, description, value, color }) => {
  return (
    <Card 
      sx={{ 
        width: "100%", 
        height: "100%",
        minWidth: { xs: '100%', sm: 240 }, 
        minHeight: { xs: 140, sm: 160 }, 
        maxHeight: { xs: 180, sm: 200 },
        borderRadius: 4,
        backgroundColor: '#fff',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.05)',
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: '1px solid rgba(0, 0, 0, 0.08)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: `0 8px 25px ${color}20`,
          '& .icon-wrapper': {
            transform: 'scale(1.1)',
            backgroundColor: `${color}15`,
          },
          '& .card-value': {
            transform: 'scale(1.02)',
            color: color,
          },
          '& .card-title': {
            color: color,
          }
        }
      }}
    >
      <CardContent sx={{ 
        p: { xs: 2.5, sm: 3 },
        display: "flex", 
        flexDirection: "column",
        height: "100%",
        gap: { xs: 1.5, sm: 2 },
        position: 'relative',
        '&:last-child': { pb: { xs: 2.5, sm: 3 } }
      }}>
        <Box sx={{ 
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          mb: 0.5
        }}>
          <Typography 
            className="card-title"
            variant="body1" 
            sx={{ 
              color: "text.secondary",
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 600,
              transition: 'color 0.3s ease',
              flex: 1,
              pr: 2,
              mt: 0.5
            }}
          >
            {title}
          </Typography>

          <Box
            className="icon-wrapper"
            sx={{
              width: { xs: 48, sm: 52 },
              height: { xs: 48, sm: 52 },
              borderRadius: '16px',
              backgroundColor: `${color}10`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: 'all 0.3s ease',
              border: `1px solid ${color}20`,
            }}
          >
            {IconComponent && (
              <IconComponent 
                sx={{ 
                  color: color,
                  fontSize: { xs: 24, sm: 26 },
                  filter: `drop-shadow(0 2px 4px ${color}30)`
                }} 
              />
            )}
          </Box>
        </Box>

        <Typography 
          className="card-value"
          variant="h4" 
          sx={{ 
            color: 'text.primary',
            fontWeight: 700,
            fontSize: { xs: "1.5rem", sm: "1.75rem" },
            lineHeight: 1.2,
            transition: 'all 0.3s ease',
            mt: 'auto'
          }}
        >
          {value}
        </Typography>

        <Typography 
          variant="body2" 
          sx={{ 
            color: "text.secondary",
            fontSize: { xs: '0.8rem', sm: '0.875rem' },
            opacity: 0.75,
            fontWeight: 500
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

DefaultInfoCard.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default DefaultInfoCard;