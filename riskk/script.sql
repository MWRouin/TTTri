�@S E   [ m a s t e r ]  
 G O  
 / * * * * * *   O b j e c t :     D a t a b a s e   [ T r i T r a i n ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 C R E A T E   D A T A B A S E   [ T r i T r a i n ]  
   C O N T A I N M E N T   =   N O N E  
   O N     P R I M A R Y    
 (   N A M E   =   N ' T r i T r a i n ' ,   F I L E N A M E   =   N ' C : \ P r o g r a m   F i l e s \ M i c r o s o f t   S Q L   S e r v e r \ M S S Q L 1 5 . M S S Q L S E R V E R \ M S S Q L \ D A T A \ T r i T r a i n . m d f '   ,   S I Z E   =   8 1 9 2 K B   ,   M A X S I Z E   =   U N L I M I T E D ,   F I L E G R O W T H   =   6 5 5 3 6 K B   )  
   L O G   O N    
 (   N A M E   =   N ' T r i T r a i n _ l o g ' ,   F I L E N A M E   =   N ' C : \ P r o g r a m   F i l e s \ M i c r o s o f t   S Q L   S e r v e r \ M S S Q L 1 5 . M S S Q L S E R V E R \ M S S Q L \ D A T A \ T r i T r a i n _ l o g . l d f '   ,   S I Z E   =   8 1 9 2 K B   ,   M A X S I Z E   =   2 0 4 8 G B   ,   F I L E G R O W T H   =   6 5 5 3 6 K B   )  
   W I T H   C A T A L O G _ C O L L A T I O N   =   D A T A B A S E _ D E F A U L T  
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   C O M P A T I B I L I T Y _ L E V E L   =   1 5 0  
 G O  
 I F   ( 1   =   F U L L T E X T S E R V I C E P R O P E R T Y ( ' I s F u l l T e x t I n s t a l l e d ' ) )  
 b e g i n  
 E X E C   [ T r i T r a i n ] . [ d b o ] . [ s p _ f u l l t e x t _ d a t a b a s e ]   @ a c t i o n   =   ' e n a b l e '  
 e n d  
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   A N S I _ N U L L _ D E F A U L T   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   A N S I _ N U L L S   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   A N S I _ P A D D I N G   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   A N S I _ W A R N I N G S   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   A R I T H A B O R T   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   A U T O _ C L O S E   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   A U T O _ S H R I N K   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   A U T O _ U P D A T E _ S T A T I S T I C S   O N    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   C U R S O R _ C L O S E _ O N _ C O M M I T   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   C U R S O R _ D E F A U L T     G L O B A L    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   C O N C A T _ N U L L _ Y I E L D S _ N U L L   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   N U M E R I C _ R O U N D A B O R T   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   Q U O T E D _ I D E N T I F I E R   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   R E C U R S I V E _ T R I G G E R S   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T     D I S A B L E _ B R O K E R    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   A U T O _ U P D A T E _ S T A T I S T I C S _ A S Y N C   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   D A T E _ C O R R E L A T I O N _ O P T I M I Z A T I O N   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   T R U S T W O R T H Y   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   A L L O W _ S N A P S H O T _ I S O L A T I O N   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   P A R A M E T E R I Z A T I O N   S I M P L E    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   R E A D _ C O M M I T T E D _ S N A P S H O T   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   H O N O R _ B R O K E R _ P R I O R I T Y   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   R E C O V E R Y   F U L L    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T     M U L T I _ U S E R    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   P A G E _ V E R I F Y   C H E C K S U M      
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   D B _ C H A I N I N G   O F F    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   F I L E S T R E A M (   N O N _ T R A N S A C T E D _ A C C E S S   =   O F F   )    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   T A R G E T _ R E C O V E R Y _ T I M E   =   6 0   S E C O N D S    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   D E L A Y E D _ D U R A B I L I T Y   =   D I S A B L E D    
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   A C C E L E R A T E D _ D A T A B A S E _ R E C O V E R Y   =   O F F      
 G O  
 E X E C   s y s . s p _ d b _ v a r d e c i m a l _ s t o r a g e _ f o r m a t   N ' T r i T r a i n ' ,   N ' O N '  
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T   Q U E R Y _ S T O R E   =   O F F  
 G O  
 U S E   [ T r i T r a i n ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ A n s w e r s ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ A n s w e r s ] (  
 	 [ A n s w e r I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ A n s w e r T e x t ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ I s C o r r e c t ]   [ b i t ]   N U L L ,  
 	 [ Q u e s t i o n I D ]   [ i n t ]   N U L L ,  
 	 [ i s A c t i v e ]   [ b i t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ A n s w e r s ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ A n s w e r I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ c a t e g o r i e ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ c a t e g o r i e ] (  
 	 [ C a t e g o r i e I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ D e s c r i p t i o n ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ I m a g e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ i s A c t i v e ]   [ b i t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ c a t e g o r i e ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ C a t e g o r i e I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ C e r t i f i c a t e ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ C e r t i f i c a t e ] (  
 	 [ C e r t i f i c a t e I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ C e r t i f i c a t e N a m e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ U s e r I D ]   [ i n t ]   N U L L ,  
 	 [ C o u r s e I D ]   [ i n t ]   N U L L ,  
 	 [ i s A c t i v e ]   [ b i t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ C e r t i f i c a t e ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ C e r t i f i c a t e I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ C o u r s e ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ C o u r s e ] (  
 	 [ C o u r s e I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ T i t l e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ D e s c r i p t i o n ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ L e v e l I D ]   [ i n t ]   N U L L ,  
 	 [ C a t e g o r i e I D ]   [ i n t ]   N U L L ,  
 	 [ i m a g e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ i s A c t i v e ]   [ b i t ]   N U L L ,  
 	 [ R e c l a i m I D ]   [ i n t ]   N U L L ,  
 	 [ D u r a t i o n ]   [ i n t ]   N U L L ,  
 	 [ F o r m e r I d ]   [ i n t ]   N U L L ,  
 	 [ D a t e ]   [ d a t e ]   N U L L ,  
 	 [ i s F a v o r i t e ]   [ b i t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ C o u r s e ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ C o u r s e I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ E m a i l C o n f i r m a t i o n ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ E m a i l C o n f i r m a t i o n ] (  
 	 [ C o n f i r m a t i o n I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ C o n f i r m a t i o n T o k e n ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ S e n t D a t e ]   [ d a t e ]   N U L L ,  
 	 [ I s C o n f i r m e d ]   [ b i t ]   N U L L ,  
 	 [ U s e r I D ]   [ i n t ]   N U L L ,  
 	 [ P a y m e n t I D ]   [ i n t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ E m a i l C o n f i r m a t i o n ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ C o n f i r m a t i o n I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ E x c e p t i o n D B ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ E x c e p t i o n D B ] (  
 	 [ I d ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ M e s s a g e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ S t a c k t r a c e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ D a t a ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ H R e s u l t ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ F u n c t i o n N a m e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ I n P l a i n t e x t ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ R e p o s i t o r y ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ C r e a t e D a t e ]   [ d a t e t i m e ]   N U L L ,  
   C O N S T R A I N T   [ P K _ E x c e p t i o n D B ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ I d ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ F a v o r i t e ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ F a v o r i t e ] (  
 	 [ F a v o r i t e I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ U s e r I D ]   [ i n t ]   N U L L ,  
 	 [ C o u r s e I D ]   [ i n t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ F a v o r i t e s ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ F a v o r i t e I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ F e e d b a c k ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ F e e d b a c k ] (  
 	 [ F e e d B a c k I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ F e e d B a c k T e x t ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ R a t i n g ]   [ i n t ]   N U L L ,  
 	 [ U s e r I D ]   [ i n t ]   N U L L ,  
 	 [ C o u r s e I D ]   [ i n t ]   N U L L ,  
 	 [ i s A c t i v e ]   [ b i t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ F e e d b a c k ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ F e e d B a c k I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ I n v o i c e ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ I n v o i c e ] (  
 	 [ I n v o i c e I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ I n v o i c e D a t e ]   [ d a t e ]   N U L L ,  
 	 [ T o t a l e A m o u n t ]   [ d e c i m a l ] ( 1 0 ,   2 )   N U L L ,  
 	 [ P a y m e n t S t a t u s ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ U s e r I D ]   [ i n t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ I n v o i c e ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ I n v o i c e I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ L e v e l ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ L e v e l ] (  
 	 [ L e v e l I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ D e s c r i p t i o n ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ i s A c t i v e ]   [ b i t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ L e v e l ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ L e v e l I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ P a r t i c i p a t i o n ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ P a r t i c i p a t i o n ] (  
 	 [ i d ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ U s e r I D ]   [ i n t ]   N U L L ,  
 	 [ C o u r s e I D ]   [ i n t ]   N U L L ,  
 	 [ D a t e ]   [ d a t e ]   N U L L ,  
   C O N S T R A I N T   [ P K _ P a r t i c i p a t i o n ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ i d ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ P a y m e n t ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ P a y m e n t ] (  
 	 [ P a y m e n t I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ A m o u n t ]   [ d e c i m a l ] ( 1 0 ,   2 )   N U L L ,  
 	 [ P a y m e n t D a t e ]   [ d a t e ]   N U L L ,  
 	 [ P a y m e n t M e t h o d e I D ]   [ i n t ]   N O T   N U L L ,  
 	 [ I n v o i c e I D ]   [ i n t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ P a y m e n t ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ P a y m e n t I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ P a y m e n t M e t h o d e ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ P a y m e n t M e t h o d e ] (  
 	 [ P a y m e n t M e t h o d e I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ P a y m e n t M e h o d e N a m e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
   C O N S T R A I N T   [ P K _ P a y m e n t M e t h o d e ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ P a y m e n t M e t h o d e I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ Q u e s t i o n ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ Q u e s t i o n ] (  
 	 [ Q u e s t i o n I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ L a b e l l e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ D e s c r i p t i o n ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ T e s t I D ]   [ i n t ]   N U L L ,  
 	 [ i s A c t i v e ]   [ b i t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ T e s t - D e t a i l s ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ Q u e s t i o n I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ R e c l a i m ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ R e c l a i m ] (  
 	 [ R e c l a i m I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ T i t l e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ D e s c r i p t i o n ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ T a g ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ i s A c t i v e ]   [ b i t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ C l a i m ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ R e c l a i m I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ R e s p o n s e ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ R e s p o n s e ] (  
 	 [ R e s p o n s e I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ V a l u e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ U s e r I D ]   [ i n t ]   N U L L ,  
 	 [ Q u e s t i o n I D ]   [ i n t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ R e s p o n s e ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ R e s p o n s e I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ R e s p o n s e _ D e t a i l s ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ R e s p o n s e _ D e t a i l s ] (  
 	 [ R e s p o n s e D e t a i l s I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ D e s c r i p t i o n ]   [ v a r c h a r ] ( m a x )   N O T   N U L L ,  
 	 [ R e s p o n s e I D ]   [ i n t ]   N U L L ,  
 	 [ A n s w e r I D ]   [ i n t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ R e s p o n s e _ D e t a i l s ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ R e s p o n s e D e t a i l s I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ R o l e ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ R o l e ] (  
 	 [ R o l e I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ D e s c r i p t i o n ]   [ v a r c h a r ] ( m a x )   N U L L ,  
   C O N S T R A I N T   [ P K _ R o l e ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ R o l e I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ S e c t i o n ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ S e c t i o n ] (  
 	 [ S e c t i o n I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ T i t l e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ D e s c r i p t i o n ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ C o u r s e I D ]   [ i n t ]   N U L L ,  
 	 [ i s A c t i v e ]   [ b i t ]   N U L L ,  
 	 [ D u r a t i o n ]   [ i n t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ Q u e s t i o n ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ S e c t i o n I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ S e s s i o n ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ S e s s i o n ] (  
 	 [ S e s s i o n I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ T y p e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ U r l ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ S e c t i o n I D ]   [ i n t ]   N U L L ,  
 	 [ i s A c t i v e ]   [ b i t ]   N U L L ,  
 	 [ T i t l e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ D u r a t i o n ]   [ i n t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ D e t a i l C h a p t e r ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ S e s s i o n I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ T e s t ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ T e s t ] (  
 	 [ T e s t I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ T i t l e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ D e s c r i p t i o n ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ C o u r s e I D ]   [ i n t ]   N U L L ,  
 	 [ i s A c t i v e ]   [ b i t ]   N U L L ,  
   C O N S T R A I N T   [ P K _ T e s t ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ T e s t I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 / * * * * * *   O b j e c t :     T a b l e   [ d b o ] . [ U s e r ]         S c r i p t   D a t e :   0 4 / 1 1 / 2 0 2 4   2 2 : 2 5 : 5 2   * * * * * * /  
 S E T   A N S I _ N U L L S   O N  
 G O  
 S E T   Q U O T E D _ I D E N T I F I E R   O N  
 G O  
 C R E A T E   T A B L E   [ d b o ] . [ U s e r ] (  
 	 [ U s e r I D ]   [ i n t ]   I D E N T I T Y ( 1 , 1 )   N O T   N U L L ,  
 	 [ F i r s t n a m e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ E m a i l ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ T e l e p h o n e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ A d d r e s s e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ R o l e I D ]   [ i n t ]   N U L L ,  
 	 [ L a s t n a m e ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ P a s s w o r d ]   [ n c h a r ] ( 1 0 )   N U L L ,  
 	 [ R e f r e s h T o k e n ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ T o k e n R d a t e C r e a t i o n ]   [ d a t e t i m e ]   N U L L ,  
 	 [ T o k e n R d a t e E x p i r a t i o n ]   [ d a t e t i m e ]   N U L L ,  
 	 [ T o k e n ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ E t a t ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ i s A c t i v e ]   [ b i t ]   N U L L ,  
 	 [ R e c l a i m I D ]   [ i n t ]   N U L L ,  
 	 [ i m a g e U r l ]   [ v a r c h a r ] ( m a x )   N U L L ,  
 	 [ A g e ]   [ i n t ]   N U L L ,  
 	 [ G e n d e r ]   [ v a r c h a r ] ( m a x )   N U L L ,  
   C O N S T R A I N T   [ P K _ U s e r ]   P R I M A R Y   K E Y   C L U S T E R E D    
 (  
 	 [ U s e r I D ]   A S C  
 ) W I T H   ( P A D _ I N D E X   =   O F F ,   S T A T I S T I C S _ N O R E C O M P U T E   =   O F F ,   I G N O R E _ D U P _ K E Y   =   O F F ,   A L L O W _ R O W _ L O C K S   =   O N ,   A L L O W _ P A G E _ L O C K S   =   O N ,   O P T I M I Z E _ F O R _ S E Q U E N T I A L _ K E Y   =   O F F )   O N   [ P R I M A R Y ]  
 )   O N   [ P R I M A R Y ]   T E X T I M A G E _ O N   [ P R I M A R Y ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ A n s w e r s ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ A n s w e r s _ Q u e s t i o n ]   F O R E I G N   K E Y ( [ Q u e s t i o n I D ] )  
 R E F E R E N C E S   [ d b o ] . [ Q u e s t i o n ]   ( [ Q u e s t i o n I D ] )  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ A n s w e r s ]   C H E C K   C O N S T R A I N T   [ F K _ A n s w e r s _ Q u e s t i o n ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ C e r t i f i c a t e ]     W I T H   N O C H E C K   A D D     C O N S T R A I N T   [ F K _ C e r t i f i c a t e _ C o u r s e ]   F O R E I G N   K E Y ( [ C o u r s e I D ] )  
 R E F E R E N C E S   [ d b o ] . [ C o u r s e ]   ( [ C o u r s e I D ] )  
 N O T   F O R   R E P L I C A T I O N    
 G O  
 A L T E R   T A B L E   [ d b o ] . [ C e r t i f i c a t e ]   N O C H E C K   C O N S T R A I N T   [ F K _ C e r t i f i c a t e _ C o u r s e ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ C e r t i f i c a t e ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ C e r t i f i c a t e _ U s e r ]   F O R E I G N   K E Y ( [ U s e r I D ] )  
 R E F E R E N C E S   [ d b o ] . [ U s e r ]   ( [ U s e r I D ] )  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ C e r t i f i c a t e ]   C H E C K   C O N S T R A I N T   [ F K _ C e r t i f i c a t e _ U s e r ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ C o u r s e ]     W I T H   N O C H E C K   A D D     C O N S T R A I N T   [ F K _ C o u r s e _ C a t e g o r i e ]   F O R E I G N   K E Y ( [ C a t e g o r i e I D ] )  
 R E F E R E N C E S   [ d b o ] . [ c a t e g o r i e ]   ( [ C a t e g o r i e I D ] )  
 N O T   F O R   R E P L I C A T I O N    
 G O  
 A L T E R   T A B L E   [ d b o ] . [ C o u r s e ]   N O C H E C K   C O N S T R A I N T   [ F K _ C o u r s e _ C a t e g o r i e ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ C o u r s e ]     W I T H   N O C H E C K   A D D     C O N S T R A I N T   [ F K _ C o u r s e _ C l a i m ]   F O R E I G N   K E Y ( [ R e c l a i m I D ] )  
 R E F E R E N C E S   [ d b o ] . [ R e c l a i m ]   ( [ R e c l a i m I D ] )  
 N O T   F O R   R E P L I C A T I O N    
 G O  
 A L T E R   T A B L E   [ d b o ] . [ C o u r s e ]   N O C H E C K   C O N S T R A I N T   [ F K _ C o u r s e _ C l a i m ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ C o u r s e ]     W I T H   N O C H E C K   A D D     C O N S T R A I N T   [ F K _ C o u r s e _ l e v e l ]   F O R E I G N   K E Y ( [ L e v e l I D ] )  
 R E F E R E N C E S   [ d b o ] . [ L e v e l ]   ( [ L e v e l I D ] )  
 N O T   F O R   R E P L I C A T I O N    
 G O  
 A L T E R   T A B L E   [ d b o ] . [ C o u r s e ]   N O C H E C K   C O N S T R A I N T   [ F K _ C o u r s e _ l e v e l ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ E m a i l C o n f i r m a t i o n ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ E m a i l C o n f i r m a t i o n _ P a y m e n t ]   F O R E I G N   K E Y ( [ P a y m e n t I D ] )  
 R E F E R E N C E S   [ d b o ] . [ P a y m e n t ]   ( [ P a y m e n t I D ] )  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ E m a i l C o n f i r m a t i o n ]   C H E C K   C O N S T R A I N T   [ F K _ E m a i l C o n f i r m a t i o n _ P a y m e n t ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ E m a i l C o n f i r m a t i o n ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ E m a i l C o n f i r m a t i o n _ U s e r ]   F O R E I G N   K E Y ( [ U s e r I D ] )  
 R E F E R E N C E S   [ d b o ] . [ U s e r ]   ( [ U s e r I D ] )  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ E m a i l C o n f i r m a t i o n ]   C H E C K   C O N S T R A I N T   [ F K _ E m a i l C o n f i r m a t i o n _ U s e r ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ F e e d b a c k ]     W I T H   N O C H E C K   A D D     C O N S T R A I N T   [ F K _ F e e d b a c k _ C o u r s e ]   F O R E I G N   K E Y ( [ C o u r s e I D ] )  
 R E F E R E N C E S   [ d b o ] . [ C o u r s e ]   ( [ C o u r s e I D ] )  
 N O T   F O R   R E P L I C A T I O N    
 G O  
 A L T E R   T A B L E   [ d b o ] . [ F e e d b a c k ]   N O C H E C K   C O N S T R A I N T   [ F K _ F e e d b a c k _ C o u r s e ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ F e e d b a c k ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ F e e d b a c k _ U s e r ]   F O R E I G N   K E Y ( [ U s e r I D ] )  
 R E F E R E N C E S   [ d b o ] . [ U s e r ]   ( [ U s e r I D ] )  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ F e e d b a c k ]   C H E C K   C O N S T R A I N T   [ F K _ F e e d b a c k _ U s e r ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ I n v o i c e ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ I n v o i c e _ U s e r ]   F O R E I G N   K E Y ( [ U s e r I D ] )  
 R E F E R E N C E S   [ d b o ] . [ U s e r ]   ( [ U s e r I D ] )  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ I n v o i c e ]   C H E C K   C O N S T R A I N T   [ F K _ I n v o i c e _ U s e r ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ P a r t i c i p a t i o n ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ P a r t i c i p a t i o n _ C o u r s e ]   F O R E I G N   K E Y ( [ C o u r s e I D ] )  
 R E F E R E N C E S   [ d b o ] . [ C o u r s e ]   ( [ C o u r s e I D ] )  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ P a r t i c i p a t i o n ]   C H E C K   C O N S T R A I N T   [ F K _ P a r t i c i p a t i o n _ C o u r s e ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ P a r t i c i p a t i o n ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ P a r t i c i p a t i o n _ U s e r ]   F O R E I G N   K E Y ( [ U s e r I D ] )  
 R E F E R E N C E S   [ d b o ] . [ U s e r ]   ( [ U s e r I D ] )  
 O N   U P D A T E   C A S C A D E  
 O N   D E L E T E   C A S C A D E  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ P a r t i c i p a t i o n ]   C H E C K   C O N S T R A I N T   [ F K _ P a r t i c i p a t i o n _ U s e r ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ P a y m e n t ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ P a y m e n t _ I n v o i c e ]   F O R E I G N   K E Y ( [ I n v o i c e I D ] )  
 R E F E R E N C E S   [ d b o ] . [ I n v o i c e ]   ( [ I n v o i c e I D ] )  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ P a y m e n t ]   C H E C K   C O N S T R A I N T   [ F K _ P a y m e n t _ I n v o i c e ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ P a y m e n t ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ P a y m e n t _ P a y m e n t M e t h o d e ]   F O R E I G N   K E Y ( [ P a y m e n t M e t h o d e I D ] )  
 R E F E R E N C E S   [ d b o ] . [ P a y m e n t M e t h o d e ]   ( [ P a y m e n t M e t h o d e I D ] )  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ P a y m e n t ]   C H E C K   C O N S T R A I N T   [ F K _ P a y m e n t _ P a y m e n t M e t h o d e ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ Q u e s t i o n ]     W I T H   N O C H E C K   A D D     C O N S T R A I N T   [ F K _ Q u e s t i o n _ T e s t ]   F O R E I G N   K E Y ( [ T e s t I D ] )  
 R E F E R E N C E S   [ d b o ] . [ T e s t ]   ( [ T e s t I D ] )  
 N O T   F O R   R E P L I C A T I O N    
 G O  
 A L T E R   T A B L E   [ d b o ] . [ Q u e s t i o n ]   N O C H E C K   C O N S T R A I N T   [ F K _ Q u e s t i o n _ T e s t ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ R e s p o n s e ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ R e s p o n s e _ Q u e s t i o n ]   F O R E I G N   K E Y ( [ Q u e s t i o n I D ] )  
 R E F E R E N C E S   [ d b o ] . [ Q u e s t i o n ]   ( [ Q u e s t i o n I D ] )  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ R e s p o n s e ]   C H E C K   C O N S T R A I N T   [ F K _ R e s p o n s e _ Q u e s t i o n ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ R e s p o n s e ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ R e s p o n s e _ U s e r ]   F O R E I G N   K E Y ( [ U s e r I D ] )  
 R E F E R E N C E S   [ d b o ] . [ U s e r ]   ( [ U s e r I D ] )  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ R e s p o n s e ]   C H E C K   C O N S T R A I N T   [ F K _ R e s p o n s e _ U s e r ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ R e s p o n s e _ D e t a i l s ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ R e s p o n s e _ D e t a i l s _ A n s w e r s ]   F O R E I G N   K E Y ( [ A n s w e r I D ] )  
 R E F E R E N C E S   [ d b o ] . [ A n s w e r s ]   ( [ A n s w e r I D ] )  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ R e s p o n s e _ D e t a i l s ]   C H E C K   C O N S T R A I N T   [ F K _ R e s p o n s e _ D e t a i l s _ A n s w e r s ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ R e s p o n s e _ D e t a i l s ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ R e s p o n s e _ D e t a i l s _ R e s p o n s e ]   F O R E I G N   K E Y ( [ R e s p o n s e I D ] )  
 R E F E R E N C E S   [ d b o ] . [ R e s p o n s e ]   ( [ R e s p o n s e I D ] )  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ R e s p o n s e _ D e t a i l s ]   C H E C K   C O N S T R A I N T   [ F K _ R e s p o n s e _ D e t a i l s _ R e s p o n s e ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ S e c t i o n ]     W I T H   N O C H E C K   A D D     C O N S T R A I N T   [ F K _ Q u e s t i o n _ C o u r s e ]   F O R E I G N   K E Y ( [ C o u r s e I D ] )  
 R E F E R E N C E S   [ d b o ] . [ C o u r s e ]   ( [ C o u r s e I D ] )  
 N O T   F O R   R E P L I C A T I O N    
 G O  
 A L T E R   T A B L E   [ d b o ] . [ S e c t i o n ]   N O C H E C K   C O N S T R A I N T   [ F K _ Q u e s t i o n _ C o u r s e ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ S e s s i o n ]     W I T H   N O C H E C K   A D D     C O N S T R A I N T   [ F K _ S e s s i o n _ S e c t i o n ]   F O R E I G N   K E Y ( [ S e c t i o n I D ] )  
 R E F E R E N C E S   [ d b o ] . [ S e c t i o n ]   ( [ S e c t i o n I D ] )  
 N O T   F O R   R E P L I C A T I O N    
 G O  
 A L T E R   T A B L E   [ d b o ] . [ S e s s i o n ]   N O C H E C K   C O N S T R A I N T   [ F K _ S e s s i o n _ S e c t i o n ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ T e s t ]     W I T H   N O C H E C K   A D D     C O N S T R A I N T   [ F K _ T e s t _ c o u r s e ]   F O R E I G N   K E Y ( [ C o u r s e I D ] )  
 R E F E R E N C E S   [ d b o ] . [ C o u r s e ]   ( [ C o u r s e I D ] )  
 N O T   F O R   R E P L I C A T I O N    
 G O  
 A L T E R   T A B L E   [ d b o ] . [ T e s t ]   N O C H E C K   C O N S T R A I N T   [ F K _ T e s t _ c o u r s e ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ U s e r ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ U s e r _ C l a i m ]   F O R E I G N   K E Y ( [ R e c l a i m I D ] )  
 R E F E R E N C E S   [ d b o ] . [ R e c l a i m ]   ( [ R e c l a i m I D ] )  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ U s e r ]   C H E C K   C O N S T R A I N T   [ F K _ U s e r _ C l a i m ]  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ U s e r ]     W I T H   C H E C K   A D D     C O N S T R A I N T   [ F K _ U s e r _ R o l e ]   F O R E I G N   K E Y ( [ R o l e I D ] )  
 R E F E R E N C E S   [ d b o ] . [ R o l e ]   ( [ R o l e I D ] )  
 G O  
 A L T E R   T A B L E   [ d b o ] . [ U s e r ]   C H E C K   C O N S T R A I N T   [ F K _ U s e r _ R o l e ]  
 G O  
 U S E   [ m a s t e r ]  
 G O  
 A L T E R   D A T A B A S E   [ T r i T r a i n ]   S E T     R E A D _ W R I T E    
 G O  
 